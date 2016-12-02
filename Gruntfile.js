module.exports = function(grunt) {

grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      src: ['Gruntfile.js', 'client/**/*.js']
    },

    watch: {
      scripts: {
        files: ['client/**/*.js', 'Gruntfile.js', 'package.json'],
        tasks: ['eslint'],
        options: {
          spawn: false  // set spawn to false to speed process
        }
      }
    },

    run: {
      bddtest: {
        cmd: 'node',
        args: './node_modules/.bin/cucumber-js'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    ngAnnotate: {  // Makes all Angular controllers minification-safe

      options: {
        remove: true,           // clears away any existing annotations
        add: true,              // adds correct annotation for minification safety
        singleQuotes: true,
      },

      my_target: {
        files: {
          'dest/<%= pkg.name %>.js': ['./public/controller/cartController.js', '.public/controller/productListController.js'] // array takes a list of all annotated JS files and concatenate them.
        },
      },
    },

    uglify: {
      my_target: {
        files: {
          // Uglify AppName.js and create a build file with a minified version o itAppName.min.js
          'build/<%= pkg.name %>.min.js': ['dest/<%= pkg.name %>.js']
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 5
        },
        files: [{
          expand: true,
          cwd: 'assets',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'build/'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'src': '**/*.html',
          'build/index.html': 'index.html',
          'build/minifiedpartials/microservice1.html': 'partials/microservice1.html',
          'build/minifiedpartials/microservice2.html': 'partials/microservice2.html'
        }
      }
    }

  });

  grunt.loadNpmTasks("gruntify-eslint");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-contrib-obfuscator');

// ADDITIONAL TASKS (not used):
// html compression: https://github.com/gruntjs/grunt-contrib-htmlmin
// css trimming (not a grunt product: https://github.com/addyosmani/grunt-uncss

  // Main grunt tasks here:

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('bddtest', ['run']);
  grunt.registerTask('wat-ch', ['watch']); // for use during development

// Optional:
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('annotate', ['ngAnnotate']);
  grunt.registerTask('uglifyjs',['uglify']);
  grunt.registerTask('minifycss',['cssmin']);
  grunt.registerTask('image-min',['imagemin']);

  // Tasks that will be executed by Docker during the build step:

  grunt.registerTask('build', ['eslint', 'run', 'mochaTest', 'ngAnnotate', 'uglify',
  'cssmin', 'imagemin', 'htmlmin']);

  grunt.registerTask('default', ['build']);

};

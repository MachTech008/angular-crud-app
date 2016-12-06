module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      src: ['server.js', 'package.json', 'Gruntfile.js', 'public/**/*.js', 'server/**/*.js', 'test/**/*.js']
    },

    watch: {
      scripts: {
        files: ['server.js', 'package.json', 'Gruntfile.js', 'public/**/*.js', 'server/**/*.js', 'test/**/*.js'],
        tasks: ['eslint', 'mochaTest'],
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
        singleQuotes: true
      },

      my_target: {
        files: {
          'dest/CartController.annotated.js': ['./public/js/controller/CartController.js'],
          'dest/OrderController.annotated.js': ['./public/js/controller/OrderController.js'],
          'dest/ProductListController.annotated.js': ['./public/js/controller/ProductListController.js']
          // destination : target for annotation.
        }
      }
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
          'build/index.html': './public/index.html',       // 'destination': 'source'
          'build/minifiedpartials/cart.html': './public/partials/cart.html',
          'build/minifiedpartials/orders.html': './public/partials/orders.html',
          'build/minifiedpartials/productList.html': './public/partials/productList.html'
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
  // css trimming (not a grunt product: https://github.com/addyosmani/grunt-uncss

  // Main grunt tasks here:

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('bddtest', ['run']);
  grunt.registerTask('wat-ch', ['watch']); // for use during development

  // Optional:
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('annotate', ['ngAnnotate']);
  grunt.registerTask('uglifyjs', ['uglify']);
  grunt.registerTask('minifycss', ['cssmin']);
  grunt.registerTask('image-min', ['imagemin']);
  grunt.registerTask('html-min', ['htmlmin']);

  // Tasks that will be executed by Docker during the build step:

  grunt.registerTask('build', ['eslint', 'run', 'mochaTest', 'ngAnnotate', 'uglify',
    'cssmin', 'imagemin', 'htmlmin']);

  grunt.registerTask('default', ['build']);

};

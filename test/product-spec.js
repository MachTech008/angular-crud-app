var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var app = require('../server/products');

describe('Products', function() {
  describe('Retrieve Products List', function() {

    it('should return a 200 response', function(done) {
      request(app)
        .get('/products')
        .expect(200, done)
    });

    it('should return a list of products', function(done) {
      request(app)
        .get('/products')
        .expect(200)
        .end(function(err, res) {
          var body = res.body.Items;
          console.log(body);
          expect(body).to.be.an.instanceof(Array);
          expect(body).to.have.length.above(-1);
          done();
        });
    });

  })
})

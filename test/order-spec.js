var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var app = require('../server');

describe('Orders', function() {
  describe('Retrieve Orders List', function() {

    it('should return a 200 response', function(done) {
      request(app)
        .get('/orders')
        .expect(200, done);
    });
    it('should return a list of orders', function(done) {
      request(app)
        .get('/orders')
        .expect(200)
        .end(function(err, res) {
          var body = res.body;
          // console.log('Here is the order-spec body:', body);

          expect(body).to.be.an.instanceof(Array);
          expect(body).to.have.length.above(-1);
          done();
      });
    });
  });
});

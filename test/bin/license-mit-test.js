var fs = require('fs'),
  should = require('should');

describe('MIT License generator', function() {

  beforeEach(function(done) {
    // TODO replace with the real implementation
    fs.writeFile('test/temp/LICENSE', 'Hey there!', function(err) {
      if (err) throw err;
      done();
    });
  });

  describe('#should create license file', function() {
    it('should create the license file', function(done) {
      fs.exists('test/temp/LICENSE', function(exists) {
        exists.should.be.ok;
        done();
      });
    })
  });

  afterEach(function(done) {
    fs.unlink('test/temp/LICENSE', function(err) {
      if (err) throw err;
      done();
    });
  })
});
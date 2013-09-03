var generator = require('./../../lib/generator'),
  should = require('should');

describe('generator', function() {

  describe('checking module properties', function() {
    generator.should.have.property('getMITLicense');
  });

  describe('.getMITLicense()', function() {

    it('should rendered the file', function() {
      var renderedFile = generator.getMITLicense('ghanoz', '2013');
      renderedFile.should.be.a('string');
      renderedFile.match(/ghanoz/g).should.exist;
      renderedFile.match(/2013/g).should.exist;
    })
  });
});
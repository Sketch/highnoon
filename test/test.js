var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

var highnoon = require('../highnoon');

describe('The library has been loaded', function() {
  it("makes me a promise I can't refuse", function() {
    return expect(highnoon.loadedPromise()).to.eventually.equal("yes!");
  });
});

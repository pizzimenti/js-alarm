var expect = require('chai').expect;

describe('Do all the things', function() {
  it("will do all the things", function() {
    var thing = new Thing("Thing1", "Thing2");
    expect(thing.Thing1).to.equal("Thing1");
   });
 });

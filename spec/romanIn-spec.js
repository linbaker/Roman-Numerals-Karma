import { romanIn } from './../src/scripts.js';

describe('romanIn', function() {
  console.log("hey");

  it('should output roman numerals', function() {
    expect(romanIn(8)).toEqual("VIII");
    expect(romanIn(35)).toEqual("XXXV");
    expect(romanIn(1)).not.toEqual("X");
  });


});

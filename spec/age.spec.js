import { myAge } from "../src/age.js"

let testObj = new myAge(2010, 8, 15, 80);
// Your logic should verify that the age has right logic.
describe('age on earth from your year of birth', function() {
  it('should test whether result.AgeEarth property is functioning properly', function() {
    expect(testObj.AgeEarth()).toEqual(19);
  });
});

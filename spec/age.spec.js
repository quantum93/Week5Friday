import { myAge } from "../src/age.js"

let testObj = new myAge(2000, 80);
// Your logic should verify that the poem has three lines.
describe('age on earth and life expectancy from your year of birth', function() {
  it('should test whether myAge.getAgeEarth propertis are functioning properly', function() {
    expect(testObj.getAgeEarth()).toEqual([19, 61]);

  });
  // it('should test whether a Haiku has three lines', function() {
  //   testObj.lineChecker();
  //   expect(testObj.threeLines).toEqual(true);
  // });
});

import { myAge } from "../src/age.js"

let testObj = new myAge(1960, 8, 15, 80);
// Check whether basic age & left life expectancy on each planet based on age and life expectancy of earth is working as expected.
describe('age on earth and life expectancy from your year of birth', function() {
  it('should test whether myAge.getAgeEarth propertis are functioning properly', function() {
    expect(testObj.getAgeEarth()).toEqual([59, 21, "Sat Aug 15 2020"]);
  });
  // it('should test whether myAge.getAgeMercury propertis are functioning properly', function() {
  //   expect(testObj.getAgeMercury()).toEqual([245, -165]);
  // });
  it('should test whether myAge.getAgeMars propertis are functioning properly', function() {
    expect(testObj.getAgeMars()).toEqual([31, 49]);
  });
  it('should test whether myAge.getAgeMercury propertis are functioning properly', function() {
    expect(testObj.getAgeMercury()).toEqual([245, 165, "Mon Apr 15 2020"]);
  });
  // it('should test whether a Haiku has three lines', function() {
  //   testObj.lineChecker();
  //   expect(testObj.threeLines).toEqual(true);
  // });
});

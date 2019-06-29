import { myAge } from "../src/age.js"

let testObj = new myAge([2000, 8, 15, 80]);

describe('age on planet from your year of birth', function() {
  it('should test whether testObj.AgePlanet result is functioning properly', function() {
    expect(testObj.AgePlanet()).toEqual([19, 79, 30, 10, 1]);
  });
});
describe('life expectancy on planet from your year of birth', function() {
  it('should test whether testObj.ExpPlanet result is functioning properly', function() {
    expect(testObj.ExpPlanet()).toEqual([61, 1, 50, 70, 79]);
  });
});
describe('next birthday on planet from your year of birth', function() {
  it('should test whether testObj.BirthPlanet resutl is functioning properly', function() {
    expect(testObj.BirthPlanet()).toEqual([Sat Aug 15 2020,Sun Nov 10 2019,Sat Mar 28 2020,Thu Jul 01 2021,Sun Jun 22 2031]);
  });
});

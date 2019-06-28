export class myAge {
  constructor(year, expectancy) {
    this.year = year;
    this.expectancy = expectancy;
  }

  getAgeMercury() {
  }
  getAgeVenus() {
  }
  getAgeEarth() {
    let yourAgeInfo = [];
    let yearInfo = new Date(); //using built-in Date object in order to get time information on earth
    let currentYear = yearInfo.getFullYear(); // get the current year on earth only from verbose Date information
    let yourAge = currentYear - this.year; // it is the simplest calculation of age based on year of birth
    let yourExpectancy = this.expectancy - yourAge;
    yourAgeInfo.push(yourAge, yourExpectancy);
    return yourAgeInfo;
  }
  getAgeMars() {
  }
  getAgeJupiter() {
  }
}

// let result = new Date(this.dayInfo);
// let dayNum = result.getMyAge();
// let dayArr = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}
// return dayArr[dayNum];

// export function myDate(dayInfo) {
//   this.dayInfo = dayInfo;
// }
//
// myDate.prototype.getMyDay = function() {
//   let result = new Date(this.dayInfo);
//   let dayNum = result.getDay();
//
//   let dayArr = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}
//   return dayArr[dayNum];
// };

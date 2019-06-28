export class myAge {
  constructor(year, month, day, expectancy) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.expectancy = expectancy;
  }

  getAgeEarth() {
    let yourAgeInfo = [];
    let yearInfo = new Date(); //using built-in Date object in order to get time information on earth
    let yourAge = parseInt(yearInfo.getFullYear() - this.year); // it is the simplest calculation of age based on year of birth
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    let nextBirthday = new Date(yearInfo.getFullYear(), this.month - 1, this.day + 365)
    yourAgeInfo.push(yourAge, yourExpectancy, nextBirthday.toDateString());
    return yourAgeInfo;
  }
  getAgeMercury() {
    let yourAgeInfo = [];
    let yearInfo = new Date(); //using built-in Date object in order to get time information on earth
    let yourAge = parseInt((yearInfo.getFullYear() - this.year)/0.24); // it is the simplest calculation of age on Mercury
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    if (yourExpectancy >= 0) {
      yourAgeInfo.push(yourAge, yourExpectancy);
    } else {
      yourAgeInfo.push(yourAge, Math.abs(yourExpectancy)); // for surpassed expectancy, the absolute value of year will be return.
    }
    return yourAgeInfo;
  }
  getAgeVenus() {
    let yourAgeInfo = [];
    let yearInfo = new Date(); //using built-in Date object in order to get time information on earth
    let yourAge = parseInt((yearInfo.getFullYear() - this.year)/0.66); // it is the simplest calculation of age on Venus
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    if (yourExpectancy >= 0) {
      yourAgeInfo.push(yourAge, yourExpectancy);
    } else {
      yourAgeInfo.push(yourAge, Math.abs(yourExpectancy)); // for surpassed expectancy, the absolute value of year will be return.
    }
    return yourAgeInfo;
  }
  getAgeMars() {
    let yourAgeInfo = [];
    let yearInfo = new Date(); //using built-in Date object in order to get time information on earth
    let yourAge = parseInt((yearInfo.getFullYear() - this.year)/1.88); // it is the simplest calculation of age on Mars
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    yourAgeInfo.push(yourAge, yourExpectancy);
    return yourAgeInfo;
  }
  getAgeJupiter() {
    let yourAgeInfo = [];
    let yearInfo = new Date(); //using built-in Date object in order to get time information on earth
    let yourAge = parseInt((yearInfo.getFullYear() - this.year)/11.86); // it is the simplest calculation of age on Jupiter
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    yourAgeInfo.push(yourAge, yourExpectancy);
    return yourAgeInfo;
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

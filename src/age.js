export class myAge {
  constructor(year, month, day, expectancy) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.expectancy = expectancy;
  }

  getAgeEarth() {
    let yourAgeInfo = [];
    let yearInfo = new Date();
    let currentYear = yearInfo.getFullYear()
    console.log(currentYear);
    let yourAge = parseInt(currentYear - this.year);
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    let nextBirthday = new Date(currentYear, this.month - 1, this.day + 366) //next year is leap year so add 366 rather than 365
    console.log(nextBirthday);
    yourAgeInfo.push(yourAge, yourExpectancy, nextBirthday);
    return yourAgeInfo;
  }
  getAgeMercury() {
    let yourAgeInfo = [];
    let yearInfo = new Date();
    let currentYear = yearInfo.getFullYear()
    let yourAge = parseInt((currentYear - this.year)/0.24);
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    let nextBirthday = new Date(currentYear, this.month - 1, this.day + 88)
    if (yourExpectancy >= 0) {
      yourAgeInfo.push(yourAge, yourExpectancy);
    } else {
      yourAgeInfo.push(yourAge, Math.abs(yourExpectancy));
    }
    return yourAgeInfo;
  }
  getAgeVenus() {
    let yourAgeInfo = [];
    let yearInfo = new Date();
    let currentYear = yearInfo.getFullYear()
    let yourAge = parseInt((currentYear - this.year)/0.66);
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    let nextBirthday = new Date(currentYear, this.month - 1, this.day + 226)
    if (yourExpectancy >= 0) {
      yourAgeInfo.push(yourAge, yourExpectancy);
    } else {
      yourAgeInfo.push(yourAge, Math.abs(yourExpectancy));
    }
    return yourAgeInfo;
  }
  getAgeMars() {
    let yourAgeInfo = [];
    let yearInfo = new Date();
    let currentYear = yearInfo.getFullYear()
    let yourAge = parseInt((currentYear - this.year)/1.88);
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    let nextBirthday = new Date(currentYear, this.month - 1, this.day + 686)
    yourAgeInfo.push(yourAge, yourExpectancy, nextBirthday.toDateString());
    return yourAgeInfo;
  }
  getAgeJupiter() {
    let yourAgeInfo = [];
    let yearInfo = new Date();
    let currentYear = yearInfo.getFullYear()
    let yourAge = parseInt((currentYear - this.year)/11.86);
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    let nextBirthday = new Date(currentYear, this.month - 1, this.day + 4329)
    yourAgeInfo.push(yourAge, yourExpectancy, nextBirthday.toDateString());
    return yourAgeInfo;
  }
}

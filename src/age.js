export class myAge {
  constructor(year, month, date, expectancy) {
    this.year = year;
    this.month = month;
    this.date = date;
    this.expectancy = expectancy;
  }

  getAgeEarth() {
    let yourAgeInfo = [];
    let yearInfo = new Date();
    let currentYear = yearInfo.getFullYear();
    console.log(currentYear);
    let yourAge = parseInt(currentYear - this.year);
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    let nextBirthday = new Date(currentYear, this.month - 1, this.date + 366); //next year is leap year so add 366 rather than 365
    console.log(nextBirthday);
    yourAgeInfo.push(yourAge, yourExpectancy, nextBirthday.toDateString());
    return yourAgeInfo;
  }
  // getAgeMercury() {
  //   let yourAgeInfo = [];
  //   let yeletarInfo = new Date();
  //    currentYear = yearInfo.getFullYear();
  //   let yourAge = parseInt((currentYear - this.year)/0.24);
  //   let yourExpectancy = parseInt(this.expectancy - yourAge);
  //   let nextBirthday = new Date(currentYear, this.month - 1, this.date + 88);
  //   if (yourExpectancy >= 0) {
  //     yourAgeInfo.push(yourAge, yourExpectancy, nextBirthday.toDateString());
  //   } else {
  //     yourAgeInfo.push(yourAge, Math.abs(yourExpectancy), nextBirthday.toDateString());
  //   }
  //   return yourAgeInfo;
  // }
  // getAgeVenus() {
  //   let yourAgeInfo = [];
  //   let yearInfo = new Date();
  //   let currentYear = yearInfo.getFullYear();
  //   let yourAge = parseInt((currentYear - this.year)/0.66);
  //   let yourExpectancy = parseInt(this.expectancy - yourAge);
  //   let nextBirthday = new Date(currentYear, this.month - 1, this.date + 226);
  //   if (yourExpectancy >= 0) {
  //     yourAgeInfo.push(yourAge, yourExpectancy, nextBirthday.toDateString());
  //   } else {
  //     yourAgeInfo.push(yourAge, Math.abs(yourExpectancy), nextBirthday.toDateString());
  //   }
  //   return yourAgeInfo;
  // }
  // getAgeMars() {
  //   let yourAgeInfo = [];
  //   let yearInfo = new Date();
  //   let currentYear = yearInfo.getFullYear();
  //   let yourAge = parseInt((currentYear - this.year)/1.88);
  //   let yourExpectancy = parseInt(this.expectancy - yourAge);
  //   let nextBirthday = new Date(currentYear, this.month - 1, this.date + 686);
  //   yourAgeInfo.push(yourAge, yourExpectancy, nextBirthday.toDateString());
  //   return yourAgeInfo;
  // }
  // getAgeJupiter() {
  //   let yourAgeInfo = [];
  //   let yearInfo = new Date();
  //   let currentYear = yearInfo.getFullYear();
  //   let yourAge = parseInt((currentYear - this.year)/11.86);
  //   let yourExpectancy = parseInt(this.expectancy - yourAge);
  //   let nextBirthday = new Date(currentYear, this.month - 1, this.date + 4329);
  //   yourAgeInfo.push(yourAge, yourExpectancy, nextBirthday.toDateString());
  //   return yourAgeInfo;
  // }
}

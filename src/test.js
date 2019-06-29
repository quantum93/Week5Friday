class myAge {
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
    let yourAge = parseInt(currentYear - this.year);
    let yourExpectancy = parseInt(this.expectancy - yourAge);
    let nextBirthday = new Date(currentYear, this.month-1, this.date+366).toDateString();
    yourAgeInfo.push(yourAge, yourExpectancy, nextBirthday);
    return yourAgeInfo;
  }
}
  const result = new myAge(1960, 8, 15, 80);
  document.write(result.getAgeEarth()[2]);

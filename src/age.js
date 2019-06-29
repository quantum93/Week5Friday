export class myAge {
  constructor(ageInfo) {
    this.year = ageInfo[0];
    this.month = ageInfo[1];
    this.date = ageInfo[2];
    this.expectancy = ageInfo[3];
    this.currentYear = new Date().getFullYear();
    this.birthday = new Date(this.year, this.month, this.date);
  }
  AgeEarth() {
    const yourAge = this.currentYear - this.birthday.getFullYear();
    return yourAge;
  }
}

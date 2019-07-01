export class myAge {
  constructor(ageInfo) {
    this.year = ageInfo[0];
    this.month = ageInfo[1];
    this.date = ageInfo[2];
    this.expectancy = ageInfo[3];
    this.currentYear = new Date().getFullYear();
    this.birthday = new Date(this.year, this.month, this.date); //The month of javascript starts with 0 rather than 1.
    this.ageEarth = this.currentYear - this.birthday.getFullYear();
    this.ageMercury = parseInt((this.currentYear - this.birthday.getFullYear())/0.24);
    this.ageVenus = parseInt((this.currentYear - this.birthday.getFullYear())/0.62);
    this.ageMars = parseInt((this.currentYear - this.birthday.getFullYear())/1.88);
    this.ageJupiter = parseInt((this.currentYear - this.birthday.getFullYear())/11.86);
    this.expEarth = (this.expectancy - this.ageEarth);
    this.expMercury = (this.expectancy - this.ageMercury);
    this.expVenus = (this.expectancy - this.ageVenus);
    this.expMars = (this.expectancy - this.ageMars);
    this.expJupiter = (this.expectancy - this.ageJupiter);
  }
  AgePlanet() {
    let agePlanets = [this.ageEarth, this.ageMercury, this.ageVenus, this.ageMars, this.ageJupiter];
    return agePlanets;
  }
  ExpPlanet() {
    let expPlanets = [this.expEarth, this.expMercury, this.expVenus, this.expMars, this.expJupiter];
    return expPlanets;
  }
  BirthPlanet() {
    const currentBirthday = new Date(this.currentYear, this.month, this.date);
    let days = [365, 88, 226, 686, 4329]; // The days of a year in each planet.
    const birthPlanets = [];
    const oneDay=1000*60*60*24;
    for (let i = 0; i < days.length; i++) {
      birthPlanets.push(new Date(currentBirthday.getTime() + days[i]*oneDay).toDateString());
    }
    return birthPlanets;
  }
  DogYear() {
    const dogYearJupiter = parseInt(((2073 - this.year)/11.86)*7); //Simply, 1 human-year is 7 dog-year
    return dogYearJupiter;
  }
  MayFly() {
    const lifeSpan = parseInt((this.ageEarth*365*24*60)/5); //Simply, 1 human-year is 7 dog-year
    return lifeSpan;
  }
}

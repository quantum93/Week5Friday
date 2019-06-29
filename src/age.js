export class myAge {
  constructor(ageInfo) {
    this.year = ageInfo[0];
    this.month = ageInfo[1];
    this.date = ageInfo[2];
    this.expectancy = ageInfo[3];
    this.currentYear = new Date().getFullYear();
    this.birthday = new Date(this.year, this.month-1, this.date);
    this.ageEarth = this.currentYear - this.birthday.getFullYear();
    this.ageMercury = parseInt((this.currentYear - this.birthday.getFullYear())/0.24);
    this.ageVenus = parseInt((this.currentYear - this.birthday.getFullYear())/0.62);
    this.ageMars = parseInt((this.currentYear - this.birthday.getFullYear())/1.88);
    this.ageJupiter = parseInt((this.currentYear - this.birthday.getFullYear())/11.86);
    this.expEarth = this.expectancy - this.ageEarth;
    this.expMercury = this.expectancy - this.ageMercury;
    this.expVenus = this.expectancy - this.ageVenus;
    this.expMars = this.expectancy - this.ageMars;
    this.expJupiter = this.expectancy - this.ageJupiter;
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
    const currentBirthday = new Date(this.currentYear, this.month-1, this.date);
    let days = [366, 88, 226, 686, 4329];
    const birthPlanets = [];
    const oneDay=1000*60*60*24;
    for (let i = 0; i < days.length; i++) {
      birthPlanets.push(new Date(currentBirthday.getTime() + days[i]*oneDay).toDateString());
    }
    return birthPlanets;
  }
}

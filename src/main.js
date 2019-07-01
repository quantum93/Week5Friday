import { myAge } from './age.js';
import './age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; //The order of css file is important tooverride bootstrap

$(document).ready(function() {
  $('#age-on-earth').submit(function(event) {
    event.preventDefault();
    let ageInfo = [$('#inputYear').val(), $('#inputMonth').val(), $('#inputDate').val(), $('#inputExpectancy').val()];
    let result = new myAge(ageInfo);

    // All lines of below are related with User inferface issue and don't need to related with business logic after Test-driven process.
    let planets = ["Earth", "Mercury", "Venus", "Mars", "Jupiter"]
    let age = result.AgePlanet();
    let expectancy = result.ExpPlanet();
    let birthday = result.BirthPlanet();

    for (let i = 0; i < planets.length; i++) {
      if (age[i] > expectancy[i]) {
        $("#" + planets[i]).text(planets[i] +":" + age[i] + ":" + expectancy[i] + "years surpassed" + ":" + birthday[i]);
      } else if (age[i] <= expectancy[i]) {
        $("#" + planets[i]).text(planets[i] +":" + age[i] + ":" + expectancy[i] + "years to live" + ":" + birthday[i]);
      }
    }

    $('#dogyear').text(result.DogYear() + " dog year old");
    $('#mayfly').text(result.MayFly() + " lifespan of mayfly");
  });
});

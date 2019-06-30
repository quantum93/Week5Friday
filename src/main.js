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
    let messages = [" years to live and your birthday on ", " years surpassed and your birthday on "]
    let age = result.AgePlanet();
    let expectancy = result.ExpPlanet();
    let birthday = result.BirthPlanet();

    $('#earth').text(planets[0] +":" + age[0] + " years old " + expectancy[0] + " years to live and your birthday on " + planets[0] + " is " + birthday[0]);
    $('#mercury').text(planets[1] +":" + age[1] + " years old " + expectancy[1] + " years to live and your birthday on " + planets[1] + " is " + birthday[1]);
    $('#venus').text(planets[2] +":" + age[2] + " years old " + expectancy[2] + " years to live and your birthday on " + planets[2] + " is " + birthday[2]);
    $('#mars').text(planets[3] +":" + age[3] + " years old " + expectancy[3] + " years to live and your birthday on " + planets[3] + " is " + birthday[3]);
    $('#jupiter').text(planets[4] +":" + age[4] + " years old " + expectancy[4] + " years to live and your birthday on " + planets[4] + " is " + birthday[4]);

    $('#dogyear').text(result.DogYear() + " dog year old");
    $('#mayfly').text(result.MayFly() + " lifespan of mayfly");
  });
});

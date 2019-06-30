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
    $('#age').text(result.AgePlanet());
    $('#exp').text(result.ExpPlanet());
    $('#birth').text(result.BirthPlanet());
    $('#dogyear').text(result.DogYear());
    $('#mayfly').text(result.MayFly());
  });
});

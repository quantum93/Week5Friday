import { myAge } from './age.js';
import './age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; //The order of css file is important tooverride bootstrap

$(document).ready(function() {
  $('#age-on-earth').submit(function(event) {
    event.preventDefault();
    let year = $('#inputYear').val();
    let expectancy = $('#inputExpectancy').val();
    let myAge = new myAge(year, expectancy);
    $('#mercury').text(myAge.getAgeMercury() + " is your age on Mercury");
    $('#venus').text(myAge.getAgeVenus() + " is your age on Venus");
    $('#earth').text(myAge.getAgeEarth() + " is your age on Earth");
    $('#mars').text(myAge.getAgeMars() + " is your age on Mars");
    $('#jupiter').text(myAge.getAgeJupiter() + " is your age on Jupiter");
  });
});
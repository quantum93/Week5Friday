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
    let month = $('#inputMonth').val();
    let day = $('#inputDay').val();
    let expectancy = $('#inputExpectancy').val();
    let result = new myAge(year, month, day, expectancy);
    $('#earth-age').text("On Earth, " + result.getAgeEarth()[0] + " years old");
    $('#earth-expectancy').text(result.getAgeEarth()[1] + " left/surpassed years to live");
    $('#earth-birth').text(result.getAgeEarth()[2] + " will be your next birthday");

    $('#mercury-age').text("On Mercury, " + result.getAgeMercury()[0] + " years old already");
    $('#mercury-expectancy').text(result.getAgeMercury()[1] + " left/surpassed years to live");
    $('#mercury-birth').text(result.getAgeMercury()[2] + " will be your next birthday");

    $('#venus-age').text("On Venus, " + result.getAgeVenus()[0] + " years old already");
    $('#venus-expectancy').text(result.getAgeVenus()[1] + " left/surpassed years to live");
    $('#venus-birth').text(result.getAgeVenus()[2] + " will be your next birthday");

    $('#mars-age').text("On Mars, " + result.getAgeMars()[0] + " years old yet");
    $('#mars-expectancy').text(result.getAgeMars()[1] + " left/surpassed years to live");
    $('#mars-birth').text(result.getAgeMars()[2] + " will be your next birthday");

    $('#jupiter-age').text("On Jupiter, " + result.getAgeJupiter()[0] + " years old yet");
    $('#jupiter-expectancy').text(result.getAgeJupiter()[1] + " left/surpassed years to live");
    $('#jupiter-birth').text(result.getAgeJupiter()[2] + " will be your next birthday");
  });
});

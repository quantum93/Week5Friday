import { myDate } from './date.js';
import './date.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; //The order of css file is important tooverride bootstrap

$(document).ready(function() {
  $('#age-on-earth').submit(function(event) {
    event.preventDefault();
    let year = $('#inputYear').val();
    let expectancy = $('#inputExpectancy').val();
    let myAge = new myDate(year, expectancy);
    $('#mercury').text(myAge.getMyAge() + " is the day of your date!");
    $('#venus').text(myAge.getMyAge() + " is the day of your date!");
    $('#earth').text(myAge.getMyAge() + " is the day of your date!");
    $('#mars').text(myAge.getMyAge() + " is the day of your date!");
    $('#jupiter').text(myAge.getMyAge() + " is the day of your date!");
  });
});

import { romanIn } from './scripts.js';
import '../css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
      var input = $("#phrase").val();
      input = romanIn(parseInt(input));
    console.log(input);
    event.preventDefault();
    });
  });

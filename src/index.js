import $ from "jquery";
import "./assets/images/hacking.jpg"
import './styles/test.css'

$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active');
    });

});
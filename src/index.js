import $ from "jquery";
import "./assets/images/hacking.jpg"
import './styles/main.less'

$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active');
    });

});
import $ from "jquery";
import './styles/main.less'

$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active');
    });

});
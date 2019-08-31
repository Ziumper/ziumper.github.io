import $ from "jquery";
import './styles/main.less';
import './styles/main.sass';

$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active');
    });

});
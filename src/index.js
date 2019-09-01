import './styles/main.scss';
import $ from "jquery";
import 'bootstrap';

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;


$(document).ready(function() {

    main();

    function main() {
        addClickHandlerOnToggle();
        showPage();
    }


    function addClickHandlerOnToggle() {
        $('.toggle').click(function() {
            $('.toggle').toggleClass('active');
        });
    }

    function showPage() {
        $('#loading').fadeOut(3000);
        $('#page').fadeIn(4000);
    }

});
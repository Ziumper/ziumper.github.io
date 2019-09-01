import './styles/main.scss';
import $ from "jquery";
import 'bootstrap';


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
        $('#page').fadeIn(5000, 'linear');
    }

});
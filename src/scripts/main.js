import $ from "jquery";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";


export const main = () => {

    $(document).ready(() => {
        onToggleMenuButtonClick();
        showPage();
        addIcons();
        turnOnFontAwesomeIcons();
    })

    function onToggleMenuButtonClick() {
        $('.toggle').click(function() {
            $('.toggle').toggleClass('active');
            $('.toggle-menu').toggleClass('active');
            var accordionChilds = $('.toggle-menu .toggle-menu-list .toggle-menu-item');
            $.each(accordionChilds, function(number, element) {
                var jqueryElement = $(element);
                var visibleElement = jqueryElement.is(':visible');
                if (visibleElement) {
                    jqueryElement.slideUp("slow");
                } else {
                    jqueryElement.slideDown("slow");
                }
            });
        });


    }

    function showPage() {
        $('#loading').fadeOut(3000);
        $('#page').fadeIn(4000);
    }

    function turnOnFontAwesomeIcons() {
        dom.watch();
    }

    function addIcons() {
        library.add([
            faGithub,
            faLinkedin,
            faInstagram,
            faFacebook
        ]);
    }
}
import $ from "jquery";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

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
        library.add([faGithub, faLinkedin]);
    }
}
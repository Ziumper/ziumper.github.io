import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faCircle } from "@fortawesome/free-regular-svg-icons/faCircle";
import 'owl.carousel';
import Shuffle from 'shufflejs';

export const main = () => {

    $(document).ready(() => {
        onToggleMenuButtonClick();
        showPage();
        addIcons();
        turnOnFontAwesomeIcons();
        addOwlCarousel();
        addOnScrollFixedMenu();
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
            faFacebook,
            faCircle
        ]);
    }

    function addOwlCarousel() {
        $(".owl-carousel").owlCarousel({
                items: 1,
                dots: true,
                onDragged: onDraggedCallback,
                dotsContainer: "#dots-container"
            }).find('.owl-item')
            .each(function(i) {
                var attr = $(this).children().attr('data-year');
                var element = $('<p>' + attr + '</p>');
                $('#dots-container .owl-dot').eq(i).append(element);
            });


        $("#dots-container").find('.owl-dot').each(function(i) {
            $(this).click(function(e) {
                var index = $(e.currentTarget.parentElement).children().index(e.currentTarget);
                changeBackground(index);
            });
        });

        function onDraggedCallback(event) {
            var index = event.item.index;
            changeBackground(index);
        }

        function changeBackground(itemIndex) {
            var activeItem = $(".owl-stage").children().eq(itemIndex).children(".item");
            var imageUrl = $(activeItem).attr("background-image");
            $('#carousel-parallax').css("background-image", "url(" + imageUrl + ")");
        }

    }

    function addOnScrollFixedMenu() {
        var navbar = $(".navigation-container");
        var lastScrollTop = 0;
        $(window).scroll(function(event) {
            var st = $(this).scrollTop();
            if (st > lastScrollTop || st == 0) {
                navbar.removeClass('navbar-fixed');
            } else {
                navbar.addClass("navbar-fixed")
            }
            lastScrollTop = st;
        });
    }

    function setupShuffle() {

    }
}
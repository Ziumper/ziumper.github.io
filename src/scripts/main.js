import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faCircle } from "@fortawesome/free-regular-svg-icons/faCircle";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { debounce } from "lodash";


import { GridShuffle } from './gridshuffle';

export const main = () => {

    setupShuffle();
    configureJqueryElements();

    function setupShuffle() {

        document.addEventListener('DOMContentLoaded', function() {
            window.gridShuffle = new GridShuffle(
                '.picture-item',
                '.my-shuffle-sizer',
                'shuffle-grid',
                '.picture-item__inner',
                'picture-item__inner--transition');
        });

    }

    function configureJqueryElements() {

        $(document).ready(() => {
            onToggleMenuButtonClick();
            showPage();
            addIcons();
            turnOnFontAwesomeIcons();
            addOnScrollFixedMenu();
            setupReturnToTop();
            addMailSender();


            function addMailSender() {
                let form = document.getElementById("contact-form");
                form.onsubmit = function(event) {

                    let email = 'tomasz.komoszeski@gmail.com'
                    let name = document.getElementById('name-input').value;
                    let webpage = document.getElementById('webpage-input').value;
                    let content = encodeURIComponent(document.getElementById('content-text-area').value);
                    let subject = encodeURIComponent('Contact form tkomoszeski.github.io: ' + name + ' ' + webpage);

                    window.open('mailto:' + email + '?subject=' + subject + '&body=' + content);
                }
            }

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
                    faCircle,
                    faArrowUp,
                    faEnvelope
                ]);
            }


            function addOnScrollFixedMenu() {

                var st = $(window).scrollTop();
                if (st > 0) {
                    $('.navbar-sticky').css('background-color', 'rgba(28, 28, 28, 0.99)');
                }

                var lastScrollTop = 0;
                $(window).on('scroll', debounce(function(event) {
                    var st = $(this).scrollTop();
                    var navigation = $('.navigation-container');
                    var navigationBarHeight = getNavigationHeight(navigation);
                    var navigationBarHeightCss = '-' + navigationBarHeight + 'px';

                    if (st > lastScrollTop || st == 0) {
                        $('.navbar-sticky').css('top', navigationBarHeightCss);
                        $('.navbar-sticky').css('background-color', 'unset');
                    } else {
                        $('.navbar-sticky').css('top', '0');
                        $('.navbar-sticky').css('background-color', 'rgba(28, 28, 28, 0.99)');
                    }

                    if (st == 0) {
                        $('.navbar-sticky').css('top', '0');
                    }
                    lastScrollTop = st;
                }, 400));

                function getNavigationHeight(navigation) {
                    var toolbarHeight = $('.toggle-menu-list').height();
                    var navigationBarHeight = navigation.height() + toolbarHeight;

                    return navigationBarHeight;
                }
            }

            function setupReturnToTop() {
                $(window).on('scroll', debounce(
                    function() {
                        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
                            $('#return-to-top').fadeIn(200); // Fade in the arrow
                        } else {
                            $('#return-to-top').fadeOut(200); // Else fade out the arrow
                        }
                    }, 400));
                $('#return-to-top').click(function() { // When arrow is clicked
                    $('body,html').animate({
                        scrollTop: 0 // Scroll to top of body
                    }, 500);
                });
            }

        })

    }
}
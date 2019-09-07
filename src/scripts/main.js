import $ from "jquery";

export const main = () => {

    $(document).ready(() => {
        addClickHandlerOnToggle();
        showPage();
    })

    function addClickHandlerOnToggle() {
        $('.toggle').click(function() {
            $('.toggle').toggleClass('active');
        });
    }

    function showPage() {
        $('#loading').fadeOut(3000);
        $('#page').fadeIn(4000);
    }
}
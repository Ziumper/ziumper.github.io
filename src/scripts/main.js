import $ from "jquery";

export const main = () => {

    $(document).ready(() => {
        onToggleMenuButtonClick();
        showPage();
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
}
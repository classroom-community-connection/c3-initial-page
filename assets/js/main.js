$(document).ready(function() {

    /* ======= Twitter Bootstrap hover dropdown ======= */
    /* Ref: https://github.com/CWSpear/bootstrap-hover-dropdown */
    /* apply dropdownHover to all elements with the data-hover="dropdown" attribute */

    /* ======= Fixed header when scrolled ======= */
    $(window).on('scroll load', function() {

        if ($(window).scrollTop() > 0) {
            $('#header').addClass('scrolled');
            $('.logo a img').attr('src', 'assets/images/c3-logo-dark.svg')
        }
        else {
            $('#header').removeClass('scrolled');
            $('.logo a img').attr('src', 'assets/images/c3-logo.svg')
        }
    });
});
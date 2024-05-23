$(document).ready(function() {
    /*    for navbar toggler icon change   */
    $('.navbar-toggler').on('click', function() {
        const icon = $(this).find('.navbar-toggler-icon');
        icon.toggleClass('close');
      });    
    /*     for mobile scroll     */
    $('.dropdown-toggle').on('click', function () {
        $('.navbar-collapse').toggleClass('mobile_scroll')
    });
});

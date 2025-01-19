$.initializeExpander = function () {
    $('body').on('click touchstart', '.js-expander-trigger', function (e) {
        $(this).closest('.js-expander').toggleClass("is-collapsed");
        e.preventDefault();
    });
}

$(document).ready(function () {
    $.initializeExpander();
});
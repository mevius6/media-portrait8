$(function() {
    $("body").addClass("page__loading");
});
$(window).on("load", function() {
    $(".page__loader-wrap").fadeOut();
    $("body").removeClass("page__loading");
});

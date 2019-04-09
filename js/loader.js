$(function() {
    $("body").addClass("page__loading");
});
$(window).on("load", function() {
    $(".page__loader-wrap").fadeOut("slow", function() {
        $("body").removeClass("page__loading");
    });
});

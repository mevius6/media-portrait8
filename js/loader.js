$(function() {
    jQuery("body").addClass("loading");
});
$(window).on("load", function(e) {
    $(".loader-wrap").fadeOut();
    jQuery("body").removeClass("loading");
});

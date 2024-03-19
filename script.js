$(document).ready(() => {
    //SLIDE TOGGLE
    $(".slide-toggle").click(() => {
        $("header").slideToggle();
    });
    //REMOVE CSS FROM ENTIRE PAGE
    $(".remove-css").click(() => {
        $(".style").removeAttr("rel");
    });
    //HIDE
    $(".hide").click(() => {
        $("header").hide();
    });
    //TOGGLE CLASS
    $(".toggle").click(() => {
        $("header").toggleClass("d-none");
    });
    //APPEND
    $(".append").click(() => {
        $(".empty").append("<p>SOME RANDOM TEXT</p>");
    });
    //ADD CLASS
    $(".addClass").click(() => {
        $(".empty").addClass("h-10");
    });
    //REMOVE CLASS
    $(".removeClass").click(() => {
        $(".empty").removeClass("h-10");
    });
});


$(function () {

    $("#navbarToggle").blur( function (event) {
        var screenSize = window.innerWidth;
        if(screenSize < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});
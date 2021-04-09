$(function () {

    $("#navbarToggle").blur(function (event) {
        var screenSize = window.innerWidth;
        if (screenSize < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});
(function (global) {
    var obj = {};
    var homeHTML ="./pageHTMLS/home.html";

    var insertHTML = function (selector, html) {
        var sel = document.querySelector(selector);
        sel.innerHTML = html;
    };

    function showLoading(selector){
        html = `
        <div class="ajaxLoader">
        <img src="./GIF/ajaxLoader.gif">
        </div>`;
        insertHTML(selector,html);
    };

    document.addEventListener("DOMContentLoaded", function(event){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(homeHTML, function(responseText){
            document.querySelector("#main-content").innerHTML = responseText;
            console.log(responseText);
        },false);
    });
    

    global.$obj = obj;
})(window);
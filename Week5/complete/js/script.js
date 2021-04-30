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
    var homeHTML = "./pageHTMLS/home.html";
    var allCategoriesURL = "http://davids-restaurant.herokuapp.com/categories.json";
    var menuHeading = "./pageHTMLS/menuHeading.html";
    var menuSingleCate = "./pageHTMLS/menuSingleCate.html";
    var menuItemsURl = "http://davids-restaurant.herokuapp.com/menu_items.json?category=";
    var menuItemHeadingHTML = "./pageHTMLS/menuItemHeading.html";
    var menuItemHTML = "./pageHTMLS/menuItem.html";
    
    var insertHTML = function (selector, html) {
        var sel = document.querySelector(selector);
        sel.innerHTML = html;
    };

    function showLoading(selector) {
        html = `
        <div class="ajaxLoader">
        <img src="./GIF/ajaxLoader.gif">
        </div>`;
        insertHTML(selector, html);
    };

    var insertProperty = function (string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;

    };



    document.addEventListener("DOMContentLoaded", function (event) {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(homeHTML, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
            console.log(responseText);
        }, false);
    });

    obj.loadMenuCategories = function () {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(allCategoriesURL, buildAndShowCategoriesHTML);
    };

    function buildAndShowCategoriesHTML(categories) {
        $ajaxUtils.sendGetRequest(menuHeading, function (menuHeading) {
            $ajaxUtils.sendGetRequest(menuSingleCate, function (menuSingleCate) {
                var menuPageHTML = buildMenuHTMLPage(categories, menuHeading, menuSingleCate);
                insertHTML("#main-content", menuPageHTML);
            }, false)
        }, false)
    };

    function buildMenuHTMLPage(categories, menuHeading, menuSingleCate) {
        var finalHTML = menuHeading;
        finalHTML += '<section class="row">';

        for (var i = 0; i < categories.length; i++) {
            var html = menuSingleCate;
            var name = "" + categories[i].name;
            var short_name = categories[i].short_name;
            html = insertProperty(html, "name", name);
            html = insertProperty(html, "short_name", short_name);
            finalHTML += html;

        }
        finalHTML += '</section>';
        return finalHTML;

    }
    

    //FOR LOADING MENU ITEMS PAGE

    obj.loadMenuItem = function(categoryshort){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(menuItemsURl + categoryshort, buildAndShowMenuItems);
    };

    function buildAndShowMenuItems(categoryMenuItems){
        $ajaxUtils.sendGetRequest(menuItemHeadingHTML, function(menuItemHeadingHTML){
            $ajaxUtils.sendGetRequest(menuItemHTML, function(menuItemHTML){
                var menuItemsHTMLView = buildMenuItemsHTMLView(categoryMenuItems, menuItemHeadingHTML, menuItemHTML);
                insertHTML("#main-content", menuItemsHTMLView);
            }, false);
        }, false);

    }
    function buildMenuItemsHTMLView(categoryMenuItems, menuItemHeadingHTML, menuItemHTML ){
        var finalHTML = '<section class="row">';
        menuItemHeadingHTML = insertProperty(menuItemHeadingHTML, "name", categoryMenuItems.category.name );
        menuItemHeadingHTML = insertProperty(menuItemHeadingHTML, "special_instruction", categoryMenuItems.category.special_instruction );
        var menu_items = categoryMenuItems.menu_items;
        
        for(var i=0; i<menu_items.length; i++){
            var html = menuItemHTML;
            var catShortName = categoryMenuItems.category.short_name;
            var short_name = menu_items[i].short_name;
            var largePortionName = menu_items[i].large_portion_name;
            var smallPortionName = menu_items[i].small_portion_name;
            var price_small = menu_items[i].price_small;
            var price_large = menu_items[i].price_large;
            var name =  menu_items[i].name;
            var description = menu_items[i].description;
            
            html = insertProperty(html,"short_name", short_name);
            html = insertProperty(html,"catShortName", catShortName);
            // html = insertProperty(html,"price_large", price_large);
            // html = insertProperty(html,"price_small", price_small);
            // html = insertProperty(html,"largePortionName", largePortionName);
            // html = insertProperty(html,"smallPortionName", smallPortionName);
            html = insertProperty(html,"name", name);
            html = insertProperty(html,"description", description);

            html = insertPrice(html,"price_large", price_large);
            html = insertPrice(html,"price_small", price_small);
            html = insertPortion(html,"largePortionName", largePortionName);
            html = insertPortion(html,"smallPortionName", smallPortionName);
            if(i%2 != 0){
                html +=   '<div class="clearfix visible-md-block visible-lg-block"></div>';
            }
            finalHTML += html;
            
        }

       
        function insertPrice(string, propName, propValue){
            if(propValue == null){
                return insertProperty(string, propName,"");
            }
            propValue = "Rs."+ propValue.toFixed(2);
            return insertProperty(string, propName, propValue);

        };

        function insertPortion(string, propName, propValue){
            if(propValue == null){
                return insertProperty(string, propName,"");
            }
            
            return insertProperty(string, propName, propValue);

        };

        
         
        finalHTML += html;
        finalHTML += '</section>';

        return finalHTML;


    };



    global.$obj = obj;
})(window);
$(document).ready(function () {


(function() {



    var $helpBar = $(".helpbar");

    $helpBar.on("click", function () {

        if(!$helpBar.hasClass("helpbar-click"))
        {
            $helpBar.addClass("helpbar-click");

           $(".helpbar-item-hidden").removeClass("helpbar-item-hidden");

        }

        else{
            $helpBar.removeClass("helpbar-click");

            $(".fa-refresh").addClass("helpbar-item-hidden");
            $(".fa-weixin").addClass("helpbar-item-hidden");
        }
        
    });

})();


(function () {

    var $navMain = $(".navbar-main");
    var $navItems = $(".navbar-item");

    $navMain.first().on("click", function(i){

        var target = $(i.target);

        if(!target.hasClass("nav-js")){
            return;

        }

        
        // $navItems.removeClass("navbar-item-selected");

        var $parent = target.closest(".navbar-item")
        // $parent.addClass("navbar-item-selected");

        if(target.hasClass("fa-cloud")) addProductsStyle($parent);
        if(target.hasClass("fa-search")) addProductsStyle($parent);


        function addProductsStyle(productsNav){

            if(!productsNav.is(".navbar-item")) return;

            if(!productsNav.hasClass("products-open"))
            {
                productsNav.addClass("products-open");
                $navItems.not(productsNav).addClass("navbar-item-hide");
            }

            else{
                productsNav.removeClass("products-open");
                $navItems.not(productsNav).removeClass("navbar-item-hide");
            }
        
        
        };
        
        function addSearchStyle(searchNav){
        
            if(!searchNav.is(".navbar-item")) return;

            if(!searchNav.hasClass("search-open"))
            {
                searchNav.addClass("search-open");
                $navItems.not(searchNav).addClass("navbar-item-hide");
            }

            else{
                productsNav.removeClass("search-open");
                $navItems.not(searchNav).removeClass("navbar-item-hide");
            }
        
        
        
        }


    });
    

    })();
    

});




      
  
  


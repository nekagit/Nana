jQuery(document).ready(function($) {
  $("#toggle-mobile-nav").click(function() {
    $("#page").toggleClass("mobile-nav-opened");
  });

  $("#page").click(function(e) {
    var target = e.target;


    var isMobileNavButtonClicked = (
      $(target).hasClass("navbar-toggler") || 
      $(target).parent().hasClass("navbar-toggler")
    );

    if (isMobileNavButtonClicked) {
      return;
    }

    $("#page").removeClass("mobile-nav-opened");
  });
})

var myIndex = 0;
    carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 9000);    
    }
 
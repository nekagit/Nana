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
 
  //---------------------------------------------//
  
  mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  function hover() {
    document.getElementById("slk").classList.add('hover'); 
  }
  function weg() {
    document.getElementById("slk").classList.remove('hover'); 
  }
  function vise() {
    document.getElementById("viseb").classList.remove('d-none');
    document.getElementById("slikb").classList.remove('d-none');
    document.getElementById("visb").classList.add('d-none');
  }
  function visee() {
    document.getElementById("textB").classList.remove('d-none');
    document.getElementById("viseeb").classList.add('d-none');
  }

  var video = document.getElementById("myVideo");
  var btn = document.getElementById("myBt");
  function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Stop";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }

  //----------------------------------------------------

  
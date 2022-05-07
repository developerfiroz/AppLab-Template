// STICKY MENU (Header SECTION)
$(document).ready(function(){

  $(".for-sticky-menu-js").waypoint(function(direction){
    if (direction == "down"){
        $(".nav-js").addClass("sticky");
    } else {
        $(".nav-js").removeClass("sticky");
    }
  });
});

//   Yotube player
var img = $("#exampleImage");
var configObject = {
  sourceUrl: img.attr("data-videourl"),
  triggerElement: "#" + img.attr("id"),
  progressCallback: function() {
    console.log("Callback Invoked.");
  }
};

var videoBuild = new YoutubeOverlayModule(configObject);

videoBuild.activateDeployment();

// Owl Carousel

$(document).ready(function(){
    $('.owl-carousel-01').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        lazyLoad: true,
        autoplay:true,
        // slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        responsive:{	
        480:{
        items:3
        },
        
        678:{
        items:3
        },
        960:{
        items:4
        },
        
        1200:{
        items:5
        }
        }
        });
});

// Screen Short Slider
$(document).ready(function(){
    $('.owl-carousel-02').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        margin: 10,
        lazyLoad: true,
        merge: true, 
        video: true,
        autoplay:true,
        // slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        responsive:{	
        480:{
        items:2
        },
        
        678:{
        items:2
        },
        
        960:{
        items:4
        }
        }
        });
});

// Meet section or Testimonial
$(document).ready(function(){
    $('.owl-carousel-03').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav:true,
        navText:['<span class="fas fa-long-arrow-left"></span>','<span class="fas fa-long-arrow-right"></span>'],
        margin: 10,
        lazyLoad: true,
        merge: true, 
        video: true,
        autoplay:true,
        // slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        responsive:{	
        480:{
        items:1
        },
        
        678:{
        items:1
        },
        
        960:{
        items:1
        }
        }
        });

    // Accodion
    $(".accordion-title").click(function () {
        $(".accordion-title").not(this).removeClass("open");
        $(".accordion-title").not(this).next().slideUp(300);
        $(this).toggleClass("open");
        $(this).next().slideToggle(300);
      });
      $(".accordion-content").css("display", "none");
});


// Back To Top
$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
    

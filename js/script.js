

    $('document').ready(function() {
         
        $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
        
  $("#owl-example").owlCarousel({
      center: true,
      autoplay:true,
      autoPlay: 3000, 
      autoplayHoverPause: true,
      margin:10,
      loop:true,
      dots: true,
      pagination: true,
      autoWidth:true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
        
    
    });


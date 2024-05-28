function active_course() {
    if ($(".active_course").length) {
        $(".active_course").owlCarousel({
            loop: true,
            margin: 20,
            items: 9,
            nav: true,
            autoplay: 100,
            smartSpeed: 1000,
            dots: false,
            responsiveClass: true,
            thumbs: true,
            thumbsPrerendered: true,
            navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>"
],

            responsive: {
                  0: {
            items: 1,
            margin: 0
          },
          991: {
            items: 2,
            margin: 30
          },
          1200: {
            items: 3,
            margin: 30
          }
        }
      });
    }
  }
  active_course(); 
function setupMobileMenu() {
  function updateBodyScroll() {
    $("body").removeClass("noscroll")
    if($(".sidebar").hasClass("open")) $("body").addClass("noscroll")
  }

  $(".menu-button").click(function() {
    $(".sidebar").toggleClass("open")
    updateBodyScroll()
  })

  $(".wrapper").click(function(e) {
    var container = $(".sidebar.open")
    if(container && !container.is(e.target) && container.has(e.target).length === 0) {
      container.removeClass("open")
      updateBodyScroll()
    }
  })

  $(".swipe-area").swipe({
    swipeRight: function() {
      if($(".sidebar:not(.open)").length < 1) return

      $(".sidebar").addClass("open");
      updateBodyScroll()
      return false;
    },
    threshold: 20
  });

  $(".wrapper").swipe({
    swipeLeft: function(event, phase, direction, distance, duration, fingers) {
      if($(".sidebar.open").length < 1) return

      $(".sidebar").removeClass("open");
      updateBodyScroll()
      return false;
    },
    threshold: 20
  })
  if($(window).width() > 480) $(".wrapper").swipe("disable")
}

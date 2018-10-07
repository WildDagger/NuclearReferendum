(function($) {
  $(function() {
    //Set Variables
    var $page = $('html, body')
    var $navbarItems = $('#main-nav a')

    //Navigation
    $navbarItems.on('click', function(e) {
      e.preventDefault()

      var linkText = e.target.innerHTML.toLowerCase()
      if (linkText == '') {
        //$page.stop().animate({ scrollTop: {section}.offset().top }, 500)
      } else {
        $page.stop().animate({ scrollTop: 0 }, 500)
      }
    })
  })
})(jQuery)
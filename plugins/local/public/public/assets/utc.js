$(document).ready(function() {
  // add home button to menu
  $('#navigation ul').prepend("<li><a href='/'>Home</a></li>");
  $(function() {
    //get full url
    var url = location.href;
    // remove domain
    current = url.replace(/^.*\/\/[^\/]+/, '')
    //change title on home page
    if (current === "/") {
      document.title = "Finding Aids | Special Collections | University of Tennessee at Chattanooga";
    }
    $('.top-bar ul li a').each(function() {
      var $this = $(this);
      // if the current path is like this link, make it active
      if ($this.attr('href') === current) {
        $this.addClass('active');
      }
    })
  })
});

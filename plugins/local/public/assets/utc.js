$(document).ready(function() {
  $(function() {
    $("#date").datepicker();
  });
  // add home button to menu
  $('#navigation ul').prepend("<li><a href='/'>Home</a></li>");
  $(function() {
    //get full url
    var url = location.href;
    // add envrironmental indicator
    if (url.indexOf('archivesspace.lib.utc.edu') === -1) {
      $('body').prepend("<div id='dev-environment' class='alert alert-info' role='alert' style='padding: 0.25em; text-align: center; margin-bottom: 0px; display: block;'> | <strong>DEV</strong> environment | </div>");
    }
    // remove domain
    current = url.replace(/^.*\/\/[^\/]+/, '')
    //change title on home page
    if (current === "/") {
      document.title = "Finding Aids | Special Collections | University of Tennessee at Chattanooga";
    }
    //capture Request click for possible redirect to form
    /*
    $('.request').click(function() {
      alert("DEMO\nHandler for request button click called from:\n" + current + ". \nNew window will open to 'SPC -make an appt.' with appended refer. This would require work on the form to capture this information.");
      window.open('https://www.utc.edu/library/special-collections/services/make-an-appointment.php?refer='+ current)
    });
    */
    $('.top-bar ul li a').each(function() {
      var $this = $(this);
      // if the current path is like this link, make it active
      if ($this.attr('href') === current) {
        $this.addClass('active');
      }
    })
  })
  $('body').prepend('<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TS9WVQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
});

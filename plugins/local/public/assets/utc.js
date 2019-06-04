$(document).ready(function(){
//var $j = jQuery.noConflict();
//  $j( function() {
	jQuery(".datepicker").datepicker();
//  } );
  // add home button to menu
  jQuery('#navigation ul').prepend("<li><a href='/'>Home</a></li>");
  jQuery(function() {
    //get full url
    var url = location.href;
    // add envrironmental indicator

    console.log(url);
    if (url.indexOf('?findingaids.utc.edu?') === -1){
      $('body').prepend("<div id='dev-environment' class='alert alert-info' role='alert' style='padding: 0.25em; text-align: center; margin-bottom: 0px; display: block;'> | <strong>DEV</strong> environment | </div>");
    }

    // remove domain
    current = url.replace(/^.*\/\/[^\/]+/, '')
    //change title on home page
    if (current === "/") {
      document.title = "Finding Aids | Special Collections | University of Tennessee at Chattanooga";
    }
    jQuery('.top-bar ul li a').each(function() {
      var $this = $(this);
      // if the current path is like this link, make it active
      if ($this.attr('href') === current) {
        $this.addClass('active');
      }
    })
  })
jQuery('body').prepend('<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TS9WVQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
});

$(document).ready(function() {
  // using https://xdsoft.net/jqplugins/datetimepicker/ for request form field
	// date format https://www.php.net/manual/en/function.date.php
  $(".datepicker").datetimepicker({
		lazyInit: true,
		step: 30,
		format: 'D n/j/Y g:i A',
		minTime: '08:00',
		maxTime: '16:30',
		formatTime: 'g:i A',
		disabledWeekDays: [0,6]
	});
  // add home button to menu
  $('#navigation ul').prepend("<li><a href='/'>Home</a></li>");
  $(function() {
    //get full url
    var url = location.href;
    // add envrironmental indicator
    //console.log(url);
    if (url.indexOf('?findingaids.utc.edu?') === -1) {
      $('body').prepend("<div id='dev-environment' class='alert alert-info' role='alert' style='padding: 0.25em; text-align: center; margin-bottom: 0px; display: block;'> | <strong>DEV</strong> environment | </div>");
    }
    // replace icon with CONTENTdm api thumbnail
    if ((url.indexOf('_objects') > -1)&&($('a.digital_object').length)) {
      var CDMurl = $('a.digital_object').attr('href');
      var CDMthumbnail = CDMurl.replace('/digital/', '/utils/getthumbnail/');
      $('a.digital_object>i').replaceWith('<img src=\"' + CDMthumbnail + '\" \/>');
      $('a.digital_object br').remove();
      $(".digital_object .panel-heading").text("View Online");
    }

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
  $('body').prepend('<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TS9WVQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
});

jQuery(document).ready(function() {
  // using https://xdsoft.net/jqplugins/datetimepicker/ for request form field
	// date format https://www.php.net/manual/en/function.date.php
  jQuery(".datepicker").datetimepicker({
		lazyInit: true,
		step: 30,
		format: 'D n/j/Y g:i A',
		minTime: '08:00',
		maxTime: '16:30',
		formatTime: 'g:i A',
		validateOnBlur: false,
		disabledWeekDays: [0,6]
	});
  // add home button to menu
  jQuery('#navigation ul').prepend("<li><a href='/'>Home</a></li>");
  jQuery(function() {
    //get full url
    var url = window.location.href;
    // add envrironmental indicator
    console.log(url);
    if (url.indexOf('findingaidstest.utc.edu') > -1) {
      $('body').prepend("<div id='dev-environment' class='alert alert-info' role='alert' style='padding: 0.25em; text-align: center; margin-bottom: 0px; display: block;'> | <strong>DEV</strong> environment | </div>");
    }
    if (url.indexOf(':8081') > -1) {
      $('body').prepend("<div id='dev-environment' class='danger danger-info' role='alert' style='padding: 0.25em; text-align: center; margin-bottom: 0px; display: block;'> | <strong>LOCAL</strong> environment | </div>");
    }
    // replace icon with CONTENTdm api thumbnail
    if ((url.indexOf('_objects') > -1)&&($('a.digital_object').length)) {
   
      var CDMurl = jQuery('a.digital_object').attr('href');
      var CDMthumbnail = CDMurl.replace('/digital/', '/utils/getthumbnail/');
      jQuery('a.digital_object>i').replaceWith('<img src=\"' + CDMthumbnail + '\" \/>');
      jQuery('a.digital_object br').remove();
      jQuery(".digital_object .panel-heading").text("View Online");
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
  jQuery('#content').prepend('<div id="alert"></div><div id="libAlert"></div>');
  jQuery.get("https://www.getrave.com/rss/utc/channel1", function(data) {
    var $XML = $(data);
    $XML.find("item").each(function() {
        var $this = $(this),
            item = {
                title:       $this.find("title").text(),
                link:        $this.find("link").text(),
                description: $this.find("description").text(),
                pubDate:     $this.find("pubDate").text()
            };
            var localDate = new Date(item.pubDate);
            var options = { dateStyle: 'full', timeStyle: 'medium'};
            if (item.title != "No emergencies at this time"){
              jQuery("#alert").append("<div id='utc-alert' class='alert alert-danger'><button type='button' class='close' data-dismiss='alert'>×</button><h2>" + item.title + "</h2><p><small>Posted on " + localDate.toLocaleString('en-US', options) + "</small></p><p>" + item.description + "</p><p><a class='btn btn-danger' href='" + item.link + "'>More information…</a></p>");
            }
            return false;
    });
  });
// BEGIN functionality to add library alerts from a feed
//  jQuery.get("https://liblab.utc.edu/orgsync/alerts-rss.xml?v=blue", function(data) {
//    var $XML = $(data);
//    $XML.find("item").each(function() {
//        var $this = $(this),
//            item = {
//                title:       $this.find("title").text(),
//                link:        $this.find("link").text(),
//                description: $this.find("description").text(),
//                pubDate:     $this.find("pubDate").text()
//            };
//            var description = item.description;
//            var split = description.split("link:");
//            var localDate = new Date(item.pubDate);
//            if (split[1] == ""){
//              var link = item.link;
//            }
//            else{
//              var link = split[1];
//            }
//            var options = { dateStyle: 'full', timeStyle: 'medium'};
//              jQuery("#libAlert").append(`<div id='library-alert' class='alert alert-danger'><button type='button' class='close' data-dismiss='alert'>×</button><h2><a href='${link}'>${item.title}</a></h2><p><small>Posted on ${localDate.toLocaleString('en-US', options)}</small></p><p>${split[0]}</p><p><a href='${link}'>Read more …</a></p>`);
//            return false;
//    });
//  });
// END add library alerts from feed
jQuery("#libAlert").append(`<div id="library-alert" class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">×</button>To help prevent the spread of the novel coronavirus (COVID-19), Special Collections personnel are working remotely. This means that access to our physical material is limited. Please email us at <a href="mailto:archives@utc.edu">archives@utc.edu</a> if you have questions. <p></p></div>`);
});

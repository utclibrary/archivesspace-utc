$(document).ready(function() {
// add environmental indicator to dev
var url = location.href;
//console.log(url);
if (url.indexOf('?findingaidsstaff.utc.edu?') === -1) {
	$('body').prepend("<div id='dev-environment' class='alert alert-info' role='alert' style='padding: 0.25em; text-align: center; margin-bottom: 0px; display: block;'> | <strong>DEV</strong> environment | </div>");
	}
$('body').prepend('<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TS9WVQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
});

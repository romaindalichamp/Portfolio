var url_cv		= "http://romain.dalichamp.fr/cv_ca";
var url_resume	= "http://romain.dalichamp.fr/resume_ca";
var url_mail	= "mailto:romain.dalichamp@free.fr";

var aboutMe	= "aboutMe";
var projects= "projects";

$( ".buttonOut" ).click(function() {	
	var url="";
	switch(this.id) {
	  case "cv": 	url = url_cv; 		break;
	  case "resume":url = url_resume; 	break;
	  case "mailto":url = url_mail; 	break;
	  default:		url = url_resume; 	break;
	} 
	window.open(url, '_blank');
});


$( ".buttonAnchor" ).click(function() {	
	var anchor="";
	switch(this.id) {
	  case "more": 		anchor = aboutMe; 	break;
	  case "projects":	anchor = projects; 	break;
	  default:			anchor = aboutMe;	break;
	} 
	// animate
	$('html, body').animate({
	    scrollTop: $('#'+anchor).offset().top
	  }, 300, function(){
	
	    // when done, add hash to url
	    // (default click behaviour)
	    window.location.hash = anchor;
	  });
});
var url_cv="http://romain.dalichamp.fr/cv_ca";
var url_resume="http://romain.dalichamp.fr/resume_ca";

$( ".btn" ).click(function() {	var url="";
	switch(this.id) {
	  case "cv": 	url = url_cv; 		break;
	  case "resume":url = url_resume; 	break;
	  default:		url = url_resume; 	break;
	} 
	window.open(url, '_blank');
});
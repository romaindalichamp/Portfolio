var urlCv				= "http://romain.dalichamp.fr/cv_ca";
var urlResume			= "http://romain.dalichamp.fr/resume_ca";
var urlMail				= "mailto:romain.dalichamp@free.fr";
var urlRecommandationFr	= "http://romain.dalichamp.fr/recommandation_fr";
var urlRecommandationEn	= "http://romain.dalichamp.fr/recommandation_en";
var urlLabourAustralia	= "http://romain.dalichamp.fr/resume_farm_au";

var aboutMe	= "aboutMe";
var projects= "projects";
var resume	= "resume";
var home	= "home";
var moocs	= "moocs";

//Buttons Click Action
$( ".buttonOut" ).click(function() {	
	var url="";
	switch(this.id) {
	  case "cvButton"		:url = urlCv; 		break;
	  case "resumeButton"	:url = urlResume; 	break;
	  case "cvButton2"		:url = urlCv; 		break;
	  case "resumeButton2"	:url = urlResume; 	break;
	  case "mailto"			:url = urlMail; 	break;
	  case "recommandationfr":url = urlRecommandationFr; 	break;
	  case "recommandationen":url = urlRecommandationEn; 	break;
	  case "labourAustralia":url = urlLabourAustralia; 		break;
	  default				:url = url_resume; 	break;
	} 
	window.open(url, '_blank');
});

//Anchor Animation
$( ".buttonAnchor" ).click(function() {	
	var anchor="";
	switch(this.id) {
	  case "more"		:anchor = aboutMe; 	break;
	  case "toProjects"	:anchor = projects;	break;
	  case "toResume"	:anchor = resume; 	break;
	  case "toHome"		:anchor = home; 	break;
	  case "toMoocs"	:anchor = moocs; 	break;
	  default:			anchor = aboutMe;	break;
	} 

	$('html, body').animate({
	    scrollTop: $('#'+anchor).offset().top
	  }, 300, function(){
	    window.location.hash = anchor;
	  });
});
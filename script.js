//Variable Definitions

var present_image = 0;
var present_image_fineArts = 0;
var present_image_nyu = 0;
var present_image_projects = 0;
var total_image_fineArts = 5;
var total_image_projects = 4;
var total_image_nyu = 3;

var previous_button_fineArts;
var current_button_projects;
var previous_button_projects;
var current_button_fineArts;

var toggle = 0;

fineArts_header = ["Charcoal","Pen","Origami-Kirigami","Pastels","Pencil"];

nyu_header = ["Capacitive-Theremin","Math Patterns","Animation"];
nyu_text = ["Check out <a href=\"https://vimeo.com/143633528\" style=\"color:#888888\"> this </a> link for the video ", 
"Available at - <a href = \"http://mathpatterns.herokuapp.com\" style=\"color:#888888\" >mathpatterns.herokuapp.com</a> * Code work on - <a href = \"http://mathuramg.com/ICMWork\" style=\"color:#888888\"> mathuramg.com/ICMWork</a>", 
"videos on <a href = \"https://vimeo.com/home/myvideos/\" style=\"color:#888888\" >vimeo</a>  "];

projects_header = ["Early Detection of Alzheimer's disease","Rachana Logo Design","Claymation Video","Web page designing"];

projects_text = ["<br>Developed and implemented image processing algorithms for the early detection of Alzheimer's<br> " 
						 + "disease using OpenCV and Matlab",
 "<br>Designed logo for the production unit of Seva-in-Action: Rachana, an NGO operating out "
						 + "<br>of Bangalore, Karnataka for the rehabilitation of the disabled",
 "<br>Conceptualized and produced Claymation video for publicity of Engineer-2012 - Technical fest "
						 + "<br>of National Institute of Technology, Karnataka",
 "<br>Designed web page through an iterative process to showcase personal art work" 
						 +"<br>over the years classified by media"]

function showNext( id )
{
	if( id == "fineArts" ) {
		total_image = total_image_fineArts;
		present_image = present_image_fineArts;
		
	}
	else if( id == "projects" ) {
		total_image = total_image_projects;
		present_image = present_image_projects;
		
	}
	else if( id == "nyu" ) {
		total_image = total_image_nyu;
		present_image = present_image_nyu;
		
	}

	previous = present_image;

	present_image = present_image + 1;
	present_image = (present_image)%total_image;

	current = present_image;
	setDots(id, previous, current );

	console.log((present_image));
	elt = document.getElementById(id);
	console.log( "images/" + id + present_image + ".jpg" );
	elt.getElementsByTagName('img')[1].src = "images/" + id + present_image+ ".jpg" ;

	if( id == "fineArts" ) {
		 present_image_fineArts = present_image;
		 document.getElementById('fineArts-header').innerHTML = fineArts_header[present_image];
	}
	else if( id == "projects" ) {
		present_image_projects = present_image;
		document.getElementById('projects-header').innerHTML = projects_header[present_image];
		document.getElementById('projects-text').innerHTML = projects_text[present_image];
	}
	else if( id == "nyu" ) {
		present_image_nyu = present_image;
		document.getElementById('nyu-header').innerHTML = nyu_header[present_image];
		document.getElementById('nyu-text').innerHTML = nyu_text[present_image];
	}
}

function showPrev( id )
{

	if( id == "fineArts" ) {
		total_image = total_image_fineArts;
		present_image = present_image_fineArts;
	}
	else if( id == "projects" ) {
		total_image = total_image_projects;
		present_image = present_image_projects;
	}
	else if( id == "nyu" ) {
		total_image = total_image_nyu;
		present_image = present_image_nyu;
	}
	previous = present_image;
	present_image = present_image -1 ;
	if( present_image< 0)
		{present_image = total_image + present_image; }

	current = present_image;
	setDots(id, previous, current );

	console.log((present_image));
	console.log( "images/" + id + present_image + ".jpg" );
	elt = document.getElementById(id);
	elt.getElementsByTagName('img')[1].src = "images/" + id + present_image+ ".jpg" ;

	if( id == "fineArts" ) {
		 present_image_fineArts = present_image;
		 document.getElementById('fineArts-header').innerHTML = fineArts_header[present_image];
	}
	else if( id == "projects" ) {
		present_image_projects = present_image
		document.getElementById('projects-header').innerHTML = projects_header[present_image];
		document.getElementById('projects-text').innerHTML = projects_text[present_image];	}
	else if( id == "nyu" ) {
	present_image_nyu = present_image
	document.getElementById('nyu-header').innerHTML = nyu_header[present_image];
	document.getElementById('nyu-text').innerHTML = nyu_text[present_image];}
}

function setDots(id,prev,curr)
{
	prevId = id + '-dot' + prev;
	currId = id + '-dot' + curr;
	console.log( prevId );
	console.log( currId );
 	previous_button  = document.getElementById( prevId );
 	current_button   = document.getElementById( currId );
 	previous_button.style.background = '#888888';
 	current_button.style.background = '#111111';//#2EC19C';
 	if( id == "fineArts")
	{
	 	previous_button_fineArts = previous_button;
	 	current_button_fineArts = current_button;
 	}
 	else if( id == "projects")
	{
	 	previous_button_projects = previous_button;
	 	current_button_projects = current_button;
 	}
 	else if( id == "nyu")
	{
	 	previous_button_nyu = previous_button;
	 	current_button_nyu = current_button;
 	}
}


function main()
{
	setDots('fineArts',0,0);
	setDots('projects',0,0);
	setDots('nyu',0,0);
	document.getElementById('fineArts-header').innerHTML = fineArts_header[0];
	document.getElementById('projects-header').innerHTML = projects_header[0];
	document.getElementById('projects-text').innerHTML = projects_text[0];
	document.getElementById('nyu-header').innerHTML = nyu_header[0];
	document.getElementById('nyu-text').innerHTML = nyu_text[0];
}

window.onload = main;

$(document).ready(function(){
	// Highlight the active page on the navbar
	$('.nav-home').addClass('active');
	// Animate the cards which are already visible
	animateCardInViewport(".myCard");

	// For photo gallery
	 $('.slider').slider({indicators: false});
});

// ScrollFire Plugin: Animate In on scroll
$('.scrollSection').scrollfire({
	// Offsets
	offset: 0,
	topOffset: 100,
	bottomOffset: 100,

	// Fires once when element begins to come in from the bottom
	onBottomIn: function( elm, distance_scrolled ) {
		animateIn(elm);
	},
});

// 7th July 2016 9:30 AM (GMT +5:30) - Changed to 8th after the holiday for Eid changed!
var KMUNbegin = new Date(Date.UTC(2016, 06, 08, 03, 30, 0));

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function countdown() {
	var now = new Date();
	var distance = KMUNbegin - now;
	
	// KMUN has begun
	if (distance < 0 && distance > -115200) {
		clearInterval(timer);

		// Show alternate text
		$("#countdown-text").css("display", "block");
		$("#countdown-box").css("display", "none");
		return;
	}
	
	// KMUN has ended
	if (distance < -115200) {
		clearInterval(timer);

		// Show alternate text
		$("#countdown-text-done").css("display", "block");
		$("#countdown-box").css("display", "none");
		return;
	}

	$("#countdown-box").css("display", "block");

	var days = Math.floor(distance / _day);
	var hours = Math.floor((distance % _day) / _hour);
	var minutes = Math.floor((distance % _hour) / _minute);
	var seconds = Math.floor((distance % _minute) / _second);

	document.getElementById('countdown-days').innerHTML = days; 
	document.getElementById('countdown-hours').innerHTML = hours;
	document.getElementById('countdown-minutes').innerHTML = minutes;
	document.getElementById('countdown-seconds').innerHTML = seconds;
}

timer = setInterval(countdown, 1000);

// Animation for showing the content
function animateIn(element) {
	$(element).velocity({ opacity: 1, top: 0 }, 400, "easeOutCubic");
}

$("#closeAlert").click(function(){
	$("#alert").velocity("slideUp", { duration: 500 });
})
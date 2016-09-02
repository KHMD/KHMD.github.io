$(".button-collapse").sideNav();

// Show and hide the To Top Button
$(window).scroll(function() {
	if ($(this).scrollTop() > 150) {
		$('#toTop:hidden').stop(true, true).show();
	} else {
		$('#toTop').stop(true, true).hide();
	}
});

// Scroll smoothly to the top when To Top button is clicked
$("#toTop").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});

// Used to check if the top of the element is within the viewport
// Modified code from http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
function isElementTopInViewport (el) {

	//special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}

	var rect = el.getBoundingClientRect();

	return (
		rect.top <= (window.innerHeight || document.documentElement.clientHeight)
	);
}


// Checks if an element's top is visible and animates it in
function animateCardInViewport(element) {
	var cardNo = 0;
	$(element).each(function(){
		if (isElementTopInViewport(this) && $(this).css("opacity") == 0) {
			var elem = this;
			cardNo++;
			setTimeout(function(){
				animateIn(elem);
			}, 100*cardNo)
			
		}
	});
}

$(window).scroll(function() {
	if ($(this).scrollTop() > 150) {
		$('#toTop:hidden').stop(true, true).show();
	} else {
		$('#toTop').stop(true, true).hide();
	}
});

$(document).ready(function(){
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal-trigger').leanModal();
});
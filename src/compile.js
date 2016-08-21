function endAni(div, delay, animation) { //Final dot animation
	$(".loading > div:nth-child(" + div + ")").delay(200).delay(delay).animate(animation);
}

$(document).ready(function(){
// Do the following only if JS is available
	$("header, main, footer").hide();
	$(".buttons").addClass("buttons-ani");
	$("body").prepend('<div class="button-container"><button class="load-button"></button><div class="loading loading-ani"><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div></div></div>');
	//Hide loading animation
	$(".loading-ani").hide(0);
	//Loading Event Handler
	$(".load-button").on("click",function(){
		// Make the button disappear
		$(this).animate({height:"300px",width:"300px",opacity:'0'},'fast').fadeOut('fast');
		// Bring forth the loading dots
		$(".loading").fadeIn('fast');
		// Delay 2 seconds
		setTimeout(function() {
				// Show content behind overlay (prep for reveal)
				$("header, main, footer").show();
		      	// Fade out the loading overlay
		      	$(".loading").delay(500).fadeOut();
		      	// Fade out the overlay
		      	$(".button-container").delay(800).fadeOut('slow');
		      	setTimeout(function(){
		      		$(".buttons-ani").addClass("buttons-ani-play");
		      	}, 1300);
		   }, 2000);
	});// End Event Handler
}); //End .ready()
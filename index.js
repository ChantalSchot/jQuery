// $("h1").css("color","red");
// With CSS method, if you add only one property in CSS (e.g. only "color"), you can log the current text color of the element.

// $("h1").addClass("big-title margin-large");
//
// $("h1").removeClass("big-title margin-large");
//
// // console.log($("h1").hasClass("big-title")); // Checks whether element has a certain class (true) or not.
//
// $("button").text("Don't click.");
// $("h1").html("<em>Hi there!</em>"); //The 'text' method includes only text, but HTML will show layout (e.g. <em>) too.
//
// $("a").attr("href", "http://www.yahoo.com");
// $("a").attr("class", "big-title"); //Attr can also be used to change classes, but will replace existing classes!

// // Click-function on class:
// $("h1").click(function() {
// 	$("h1").css("color", "purple");
// });

// // Using jQuery to target a number of elements (instead of a 'for loop' in JavaScript)...
//
// // FULL function (without jQuery):
// for (var i = 0; i < 5; i++) {
// 	document.querySelectorAll("button")[i].addEventListener("click", function() { //click on button
// 		document.querySelector("h1").style.color = "purple"; // change color of h1
// 	});
// }

// // Identical function (with jQuery):
// $("button").click(function() {
// 	$("h1").css("color", "purple");
// });


// // jQuery function for keypress event in input box:
// $("input").keypress(function(event) { //Simply change "input" to "body" or "document" so any key on the page is logged!
// 	console.log(event.key);
// })

// // Challenge: key will replace text inside H1:
// $("body").keypress(function(event) { //Simply change "input" to "body" or "document" so any key on the page is logged!
// 	console.log(event.key);
// 	$("h1").text(event.key);
// })

// // Event listener "on":
// $("h1").on("mouseover", function() { // Possible Events for DOM can be found in MDN docs
// 	$("h1").css("color", "purple");
// });

// Adding element with jQuery:
// $("h1").before("<button>New</button>");
// 			//replace 'before' with 'after' to add element after target element
// $("h1").prepend("<button>New</button>");
// $("h1").append('<input type="text" name="" value="">');
// 			//replace 'before' with 'prepend' or 'append' to place element INSIDE target element on the same line.
//
// // Remove element with jQuery:
// $("button").remove();


// // Web animations with jQuery:
// $("button").on("click", function() {
// 	// $("h1").hide(); // elements is hidden completely (removed from HTML flow)
// 	// $("h1").toggle(); //toggle visibility of elements
// 	// $("h1").fadeOut(); //fade element out (or fadeIn)
// 	// $("h1").fadeToggle(); //toggle fade element out/in
// 		$("h1").slideToggle(); //slideUp / slideDown works as e.g. dropdown menu:
// });
//
// // Test with dropdown menu:
// $(".dropdown-click, .dropdown").on("click", function() {
// 	$(".dropdown").slideToggle();
// });


// Animate custom css:
// $("button").on("click", function() {
// 	$("h1").animate({opacity:0.5}); //Animate only works for css with a NUMERIC value! (does not work for e.g. color)
// });

// Various animations can be chained together, carried out subsequently:
$("button").on("click", function() {
	$("h1").slideUp().slideDown().animate({opacity:0.5}); //Animate only works for css with a NUMERIC value! (does not work for e.g. color)
});

// $("h1").css("color","red");
// With CSS method, if you add only one property in CSS (e.g. only "color"), you can log the current text color of the element.

$("h1").addClass("big-title margin-large");

$("h1").removeClass("big-title margin-large");

// console.log($("h1").hasClass("big-title")); // Checks whether element has a certain class (true) or not.

$("button").text("Don't click.");
$("h1").html("<em>Hi there!</em>"); //The 'text' method includes only text, but HTML will show layout (e.g. <em>) too.

$("a").attr("href", "http://www.yahoo.com");
$("a").attr("class", "big-title"); //Attr can also be used to change classes, but will replace existing classes!

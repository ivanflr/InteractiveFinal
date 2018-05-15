// When the user scrolls the page, execute myFunction
$(document).ready(function () {
	$("a[href^='#']").on("click", function (e) {
		e.preventDefault();

		var this_link = $(this),
			id = this_link.attr("href"),
			element = $(id);

		scrollToElement(element);
	});
});

function scrollToElement(ele) {
	$("html, body").animate({
		scrollTop: ele.offset().top
	});
}
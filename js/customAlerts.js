(function ($) {
	
	$.fn.customAlert() = function(customOptions) {
		
		var options = $.extend({
			message: "",
			type: "primary",
			targetElement: $("#body"),
			
		}, customOptions);
		
		var alertHtml = "<div class='alert alert-" + alertType + " alert-dismissible fade show' role='alert'>" +
		alertMessage +
		"<button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
		"<span aria-hidden='true'>&times;</span>"
		"</button>"
		"</div>";
		
		var alertElement = $(alertHtml).insertBefore(targetElement);
		
		alertElement.alert();
		
	}
	
}(jQuery));
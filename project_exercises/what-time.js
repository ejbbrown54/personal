jQuery(function() {
	$("button").click(function() {
		$.get("https://hb-server-time.herokuapp.com/", function(data) {
			$("#serverTime").text(data);
		});
	});
});

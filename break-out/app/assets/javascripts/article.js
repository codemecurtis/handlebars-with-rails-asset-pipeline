$(document).on("page:change", function() {
	$('.new_article').on('submit', function(e){
		e.preventDefault();
		// alert("Hello World!!")
		var source = $('#new-article').html()
		var template = Handlebars.compile(source)
		$.ajax({
			url: '/article',
			type: 'POST',
		// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		data: $(this).serialize(),
	})
		.done(function(data) {
			$(".article-list").append(template(data))

			$('.new_article').each(function(){
				this.reset();
			})
			console.log(data);
		})
		.fail(function() {
			console.log("error");
		})
	});
	
});
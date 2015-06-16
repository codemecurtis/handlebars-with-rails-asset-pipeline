$(document).on("page:change", function() {
	$('.new_article').on('submit', function(e){
		e.preventDefault();
		// alert("Hello World!!")
		// var source = $('#new-article').html()
		// var template = Handlebars.compile(source)
		$.ajax({
			url: '/article',
			type: 'POST',
		// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		data: $(this).serialize(),
	})
		.done(function(data) {
			var context = {}
  		context.article = data
  		var template = HandlebarsTemplates['templates/new-article'](context)
  
			$(".article-list").append(template)

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
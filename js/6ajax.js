//var bingKey =
var searchUrl = 'http://api.bing.net/qson.aspx?=';//INSERT_QUERY_HERE&JsonType=callback&JsonCallback=?'

$('input').on('keyup', function () {
	//if(evt.keyCode === 13){
		getSearchSuggestion($(this).val());
	});
//});

function getSearchSuggestion(query) {
	var q = query;
	var pageLimit = 30;
	var url = encodeURI(searchUrl + '&query=' + query + '&JsonType=callback&JsonCallback=?');
	//console.log(url)
	
	$.ajax({
		url: url,
		type: 'get',
		dataType: 'jsonp',
	}).done(function(response){
		console.log(response)
		var results = response.SearchSuggestion.Section;
		console.log(results)
		render(results)
	});
}


function render(SuggestionList) {
	var results = $('.results');
	results.empty();
	//console.log(results);
	for(var i = 0; i < SuggestionList.length; i++){
		var result = SuggestionList[i]
		console.log(result.Text);
		//results.append(createStuffHTML(stuff[i]));
		var html = $('<a href = "http://www.bing.com/search?q='+ result.Text + '">' + result.Text + '</a>');
$('.results').append(html);	
	}
}




/*function createStuffHTML(stuff) {
	var stuffString = '<div class="stuff">' +
					'<div class="title">' + 'filler' + result.text + '</div>' +
					/*'<div class="sub-menu-background"></div>' +
					'<div class="sub-menu">' +
						'<div class="title">' + movie.title + '</div>' +
						'<div class="rating">Rated: ' + movie.mpaa_rating + '</div>' +
						'<div class="critics">' + movie.ratings.critics_score + '%</div>' +
					'</div>' +
			'</div>';
			console.log(section.text)
	var stuffEl = $(stuffString);
	//stuffEl.css({
	//	backgroundImage: 'url(' + movie.posters.detailed.replace('tmb','ori') + ')'
	//});

	return stuffEl;
}	*/



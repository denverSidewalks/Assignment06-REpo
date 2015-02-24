//var bingKey =
var searchUrl = 'http://api.bing.net/qson.aspx?=';//INSERT_QUERY_HERE&JsonType=callback&JsonCallback=?'

$('input').on('keyup', function (evt) {
	if(evt.keyCode === 13){
		getStuffs($(this).val());
	}
});

function getStuffs(query) {
	var q = query;
	var pageLimit = 30;
	var url = encodeURI(searchUrl + '&query=' + query + '&JsonType=callback&JsonCallback=?');
	console.log(url)
	$.ajax({
		url: url,
		dataType: 'jsonp',
	}).done(function(response){
		render(response.stuffs);
	});
}


function render(stuffs) {
	var results = $('.results');
	results.empty();
	console.log(results);
	for(var i = 0; i < stuffs.length; i++){
		results.append(createStuffHTML(stuff[i]));
	}
}

function createStuffHTML(stuff) {
	var stuffString = '<div class="stuff">' +
					'<div class="sub-menu-background"></div>' +
					/*'<div class="sub-menu">' +
						'<div class="title">' + movie.title + '</div>' +
						'<div class="rating">Rated: ' + movie.mpaa_rating + '</div>' +
						'<div class="critics">' + movie.ratings.critics_score + '%</div>' +
					'</div>' +*/
			'</div>';

	var stuffEl = $(stuffString);
	//stuffEl.css({
	//	backgroundImage: 'url(' + movie.posters.detailed.replace('tmb','ori') + ')'
	//});

	return stuffEl;
}


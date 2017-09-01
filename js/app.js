
//The [] is a dependency, which is part of dependency injection. Also, you must reference
// 'myApp' as your ng-app in the code.



var app = angular.module('myApp', []);

// This is Angular's version of an .ajax call to get API:


app.controller('firstCtrl', function($scope, $http){

		var anchor
		var href

	$scope.click = function(words){
// Pass WORD parameter into the API query as a string so that the API will take the user's input.
//Using .then to check if the data comes in or resolved. Basically, wait until it's resolved before moving forward.
	$http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ words +' &api-key=f6f8236cce5b4069b38f7a0d56ffbeed').then(function(success){
	$scope.newsArr = success.data.response.docs;
	console.log(success)

	$('.container').css('height', '95vh')
		var anchor = $('li').children().children('a')
		var href = $(anchor).attr('ng-href')

		$('#preview').attr('src', href)
		
	}

});

}

	// var h = window.innerHeight;
	// // console.log(h);
	// console.log($('#results').height())
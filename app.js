(function(){
	var doubanApp = angular.module("doubanApp",["ngRoute","doubanApp.hotModule","doubanApp.top250Module","doubanApp.commingModule"]);
	doubanApp.config(["$routeProvider",function($routeProvider){
		$routeProvider.
		when("/hot",{
			templateUrl : "hot/hot.html",
			controller : "HotController",
		}).
		when("/coming_soon",{
			templateUrl : "comming/comming.html",
			controller : "CommingController",
		}).
		when("/top250",{
			templateUrl : "top250/top250.html",
			controller : "Top250Controller",
		}).
		otherwise({
			redirectTo:"/hot",
		})
	}])
})()
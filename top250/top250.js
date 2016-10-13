//TOP250模块
(function(){
	var top250Module = angular.module("doubanApp.top250Module",["doubanApp.service"]);
	top250Module.controller("Top250Controller",["$scope","JsonpService",function($scope,JsonpService){
		JsonpService.jsonp("https://api.douban.com/v2/movie/top250",{count:5,start:0},function(res){
			console.log(res);
			$scope.subjects = res.subjects;
			//电影的总部数
			$scope.total = res.total;
			$scope.$apply();
		})
	}])
})()
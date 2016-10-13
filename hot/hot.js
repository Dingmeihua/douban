//正在热映模块
(function(){
	var hotModule = angular.module("doubanApp.hotModule",["doubanApp.service"]);
	hotModule.controller("HotController",["$scope","JsonpService",function($scope,JsonpService){
		JsonpService.jsonp("https://api.douban.com/v2/movie/in_theaters",{count:5,start:0},function(res){
			// console.log(res);
			$scope.subjects = res.subjects;
			//电影的总部数
			$scope.total = res.total;
			$scope.$apply();
		})
	}])
})()
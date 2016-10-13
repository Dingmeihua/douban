//即将上映模块
(function(){
	var commingModule = angular.module("doubanApp.commingModule",["doubanApp.service"]);
	commingModule.controller("CommingController",["$scope","JsonpService",function($scope,JsonpService){
		JsonpService.jsonp("https://api.douban.com/v2/movie/coming_soon",{count:5,start:0},function(res){
			console.log(res);
			$scope.subjects = res.subjects;
			//电影的总部数
			$scope.total = res.total;
			$scope.$apply();
		})
	}])
})()
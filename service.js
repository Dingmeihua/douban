(function(){
	var service = angular.module("doubanApp.service",[]);
	service.service("JsonpService",["$window",function($window){
		this.jsonp = function(url,params,fn){
			var query = "?";
			for(key in params){
				query += key + "=" + params[key] + "&&";
			}
			var funName = "my_callback" + new Date().getTime();
			query += "callback" + "=" + funName;
			$window[funName] = function(res){
				
				fn(res);
				$window.document.body.removeChild(script);
			}
			var script = $window.document.createElement("script");
			script.src = url + query;
			$window.document.body.appendChild(script);
	};
	}])
})()
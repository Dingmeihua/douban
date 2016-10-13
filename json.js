//https://api.douban.com//v2/movie/in_theaters?count=5&&start=1&&callback=query1234
function jsonp(url,params,fn){
	var query = "?";
	//1.拼接参数
	for(key in params){
		query += key + "=" + params[key] + "&&";
	}
	//生成函数名
	var funName = "my_callback" + new Date().getTime();
	query += "callback" + "=" + funName;
	//挂载函数
	window[funName] = fn;
	
	window.document.body.removeChild(script);
	//要想页面添加script标签
	var script = document.createElement('script');
	script.src = url + query;

	window.document.body.appendChild(script);
};
jsonp("https://api.douban.com//v2/movie/in_theaters",{count:5,start:1},function(res){
	console.log(res);
})
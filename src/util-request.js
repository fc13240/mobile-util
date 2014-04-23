/*请求json文件，并进行页弱缓存*/
var _cache = {};
var _option = {
	timeout: 10000,//超时时间
	onerror: function(xhr,textStatus,error){//请求错误处理
		/*
		当xhr的状态码正常时才可以进行相关提示，防止在ajax正在请求时跳转页面，造成二次提示
		http://www.cnblogs.com/mybest/archive/2011/12/13/2285730.html
		XMLHttpRequest.readyState:

		状态码 

		0 － （未初始化）还没有调用send()方法 

		1 － （载入）已调用send()方法，正在发送请求 

		2 － （载入完成）send()方法执行完成，已经接收到全部响应内容 

		3 － （交互）正在解析响应内容 

		4 － （完成）响应内容解析完成，可以在客户端调用了
		*/
		var errMsg;
		switch(textStatus){
			case 'timeout':
				errMsg = '请求超时';
				break;
			case 'parsererror':
				errMsg = '数据解析错误';
				break;
			case 'abort':
				break;
			case 'error':
				var sts = xhr.status;
                if(sts == 404){
                    errMsg = '请求地址不存在';
                    break;
                }
                if(sts == 0 && xhr.readyState == 0){
                    errMsg = '当前网络不可用，请检查网络设置';
                    break;
                }else{
                    errMsg = '数据加载错误';
                }
			case 'notmodified':
				return;
		}
		if(errMsg){
			util.alert(errMsg);
		}
	}
};
util.getJSON = function(url,callback,option){
	callback || (callback = new Function());
	option = $.extend({},_option,option);
	var cacheVal = _cache[url]; //从内存中读取速度比从浏览器缓存中读取速度快
	if(cacheVal){
		callback(cacheVal);
	}else{
		$.ajax({
            async: true,
            cache: true,
            url: url,
            type: 'GET',
            dataType: 'json',
            timeout: option.timeout,
            success: function(json) {
                _cache[url] = json;
				callback(json);
            },
            error: option.onerror
        });
	}
}
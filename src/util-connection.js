var $win = $(window);
/*
https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine.onLine
*/
var _isOnline = navigator.onLine;
if(_isOnline){
	var conn = navigator.connection;
	if(conn){
		_isOnline = conn.type != conn.UNKNOWN
	}
}
$win.on('online',function(){
	_isOnline = true;
}).on('offline',function(){
	_isOnline = false;
});
util.isOnline = function(){
	return _isOnline;
}
/*操作缓存*/
var _localStorage = localStorage;
util.Cache = {
	set: function(name,val){
		try {
            var json = JSON.stringify(val);
            _localStorage[name] = json;
            return true;
        } catch (e) {}
	},
	get: function(name){
		var val = _localStorage[name];
		if(val != undefined && val != null){
			return JSON.parse(val);
		}
	},
	remove: function(name){
		return _localStorage.removeItem(name);
	}
}
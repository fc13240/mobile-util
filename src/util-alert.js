/*重写alert方法*/
var _alert = android.alert;
if($.isFunction(android.alert)){
    util.alert = function(msg){
        _alert(message);
    }
}else{
    util.alert = function(msg){
        alert(msg);
    }
}
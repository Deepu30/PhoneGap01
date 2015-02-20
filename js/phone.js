var PHONE = (function(module){
	module.Doit =function(resultObject){
		resultObject.prepend(Date()+'</br>');
};
	return module;
}(PHONE || {}));

var displayHello = function() {
	var name =      document.getElementById("firstname").value;
	navigator.notification.alert("name" + name);
}
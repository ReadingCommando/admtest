define(function() {
	var myModule = {
		sayHello: function() {
			alert("Hello World");
			alert(this.name);
		},
	}

	Object.defineProperties(myModule,{
		"name":{
				value:"PeterSong"
			},
		"Nationality":{
			value:"China"
		}

	});
	return myModule;
});


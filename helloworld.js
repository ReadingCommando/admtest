define(function() {
	var myModule = {
		sayHello: function() {
			alert("Hello World");
			alert(this.hoppy);
		},
	}

	Object.defineProperties(myModule,{
		"name":{
				value:"PeterSong"
			},
		"Nationality":{
			value:"China"
		},
		hoppy:{
			value:"reading books"
		}

	});
	return myModule;
});


define(function() {
	var myModule = {
		sayHello: function() {
			alert("Hello World");
			alert(this.hobby);
		},
	}

	Object.defineProperties(myModule,{
		"name":{
				value:"PeterSong"
			},
		"Nationality":{
			value:"China"
		},
		hobby:{
			value:"reading books"
		}

	});
	return myModule;
});


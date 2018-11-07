// ******************************* 
// EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
(function() {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
//console.log(names);

for (var i = 0; i < names.length; i++) {
	var foundfirstletterJ = names[i].startsWith('J');
	var foundfirstletterj = names[i].startsWith('j');
	if ( foundfirstletterJ == true || foundfirstletterj == true) {
		byeSpeaker.speak(names[i]);
	}
	else {
		helloSpeaker.speak(names[i]);
	}
}
})("Coursera ASSIGNMENT!");


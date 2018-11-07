// ******************************* 
// EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
(function() {
var names = ["Ernesto", "John", "jose", "juan", "Josefina", "Natasha", "Mary", "jackie", "Paolo", "Yakoov"];
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


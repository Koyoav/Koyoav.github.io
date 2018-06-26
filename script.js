var database=[
{
	username: "admin",	
	password: "1234"
},
{
	username: "hadass",
	password: "4321"
}
];

function isNewUser(username, password){

	for(var i=0; i < database.length; i++){
		if (username === database[i].username){
			alert("Username already exist")
			return false;
		}	
	}
	return true;
}

function makeAccount(username, password){
	if (isNewUser(username, password)){
		var newUser={username, password};
		database.push(newUser);
		console.log(database);
	}
}

function isUserValid(username, password){
	for (var i = 0; i < database.length; i++) {
		if (username === database[i].username && password===database[i].password){
			return true;
		}
	}
	return false;
}

function logIn(username,password){
	if (isUserValid(username,password) && (username== "admin")){
		window.location.href= "admin.html";
	}
	else if (isUserValid(username,password)){
		window.location.href= "main.html";
	} 
	else{
		alert("שם משתמש או סיסמא שגויים");
	}
}

 
var signInButton = document.getElementsByTagName("Button")[1];
signInButton.addEventListener("click", function(){
	var userNamePrompt= prompt("בחר שם משתמש באנגלית");
	var passwordPrompt= prompt("בחר סיסמא ");
	makeAccount(userNamePrompt, passwordPrompt);
} )

var logInButton = document.getElementsByTagName("Button")[0];
logInButton.addEventListener("click", function(){
	var userNamePrompt= prompt("הכנס שם משתמש באנגלית");
	var passwordPrompt= prompt("הכנס סיסמא ");
	logIn(userNamePrompt, passwordPrompt);
} )







// Carlos Solis 10/04/19
//Set the function that runs when the document loads
window.onload = loadDocument;

function loadDocument() {
//Put your code here. Treat this function like myFirstMethod	
	var buttonEL = document.getElementById("start");
	buttonEL.onclick = startgame;
}

//Start game when button is pushed
function startgame() {
	console.log("You are standing in the middle of a random forest. Up ahead their is a small cottage, and there is another path going the other way.");
	var option 
	do {
		option = prompt("What would you do? \"Go to the cottage\", or \"follow the path\"?");
	} while(option != "cottage" && option != "path")
		
	if(option == "cottage") {
		runCottage();
	} else {
		runPath();
	}

}

function runCottage() {
	console.log("You approach the cottage. And there is a mailbox next to you on one side, and a shotgun on your other side.")
	var option
	do {
		option = prompt("What would you do? Will you \"open the mailbox\", \"knock the door\", \"or pick up the shotgun\"?");
	} while(option != "open" && option != "knock" && option != "shotgun")
		
	if(option == "open") {
		console.log("A lady comes out to demand an explanation for opening her mailbox, then tells you to leave.")
		console.log("TOO BAD")
		return;
	} else {
		if (option == "knock") {
			console.log("A lady with a shotgun tells you to leave. She hates visitors.")
			console.log("TOO BAD")
			return;
		} else {
			console.log("You go to the shotgun and pick it up and cock it, finding out its loaded. A lady comes out and sees you. Immediately running back to her house in fear of her life.")
			console.log("You now have a shotgun.:)")
			runPathL();
		}
	}
	
}

function runPath(){
	console.log("You follow the path until you find a pile of leaves.")
	var option
	do {
		option = prompt("What will you do? \"Pick up the pile\", or \"ignore it\"?");
	} while(option !== "pile" && option !=  "ignore")
	
	if(option == "pile") {
		console.log("You pick up the pile of leaves to reveal a LANDMINE!!!!")
		console.log("KABOOM!")
		console.log("TOO BAD")
		return;
	} else {
		console.log("You continue until you find a two paths.")
	}
	var option
	do {
		option = prompt("What will you do? \"Go left\", or \"go right\"?")
	}
		
}
	
function runPathL(){
	
}
//This function will run once a student clicks 
// on an image of a symbol.
function chooseWinner(userChoice,compChoice)
{

// compChoice is parameter for testing purposes
if(compChoice === undefined)
{ 
    //select CompChoice if not passed in as argument.  
    
    //TODO select a random number 0, 1 or 2
	var random = Math.floor(Math.random()* imgArray.length)
    //TODO set the compChoice variable to string 
    // rock paper or scissors (same strings as element's ids)
    ????
}

//This uses an alert to tell user what choices
//  were made
alert(`User Chose ${userChoice}`);
alert(`Computer Chose ${userChoice}`);

//TODO let's grab all three images using a css selector for imgs 
var imgArray = document.querySelectorAll("img");
    
//TODO loop through imgArray (counting loop) and hide all non choices.
for(var index =0; index < imgArray.length; index++) {
    //TODO If userChoice is NOT same as Element's id
    if(?????) {
        // TODO Change display on current element to none like so
        // currentEL.style.display = "none";
    }
}

//TODO Use if statements to decide winner for all choices
if(userChoice === 'rock' && compChoice === 'paper') {
	winner = 'computer';
} // .....

//display winner in contents of div id="content" 
//TODO select content Element
var contentElement = ????;
//TODO set contents of that element to be winning image
contentElement.?????? = "<img ??????/>";
}
//Array of student names
var clsOf2021 = ['Daniel','Gloribel','Francelix','Carlos','Albert','Wendy','Jayden','Paige','Joe'];
//parallel list of student ids for above students.
var idsOf2021 = [178457, 187968,  185582,  178927,  178460, 176875, 189385, 177257, 180553 ];

/////////////////////////////////////////////////////////////
// Here is my initialization in the ready event
////////////////////////////////////////////////////////////
window.onload = function () {
    //initialize the click event handler of the selectStudent button
    var buttonEL = document.querySelector('#selectStudent');
    buttonEL.addEventListener('click',selectStudent);
    
    //Initialize list of student buttons 
    var listEL = document.querySelector('#studentList');
	
	var clsOf2021 = ["Daniel", "Gloribel", "Francelix", "Carlos", "Albert", "Wendy", "Jayden", "Paige", "Joe"]
    //loop using length of clsOf2021
    for(var index=0; index < clsOf2021.length; index++) {
        //add that student name as a LI element inside the list.
        listEL.innerHTML += makeLIfromName(clsOf2021[index]);
    }
}

function selectStudent(e) {
    //Get array of List Items
    var listItems = document.querySelectorAll("li");
	//Math.random returns between 0 and 1 not including 1 
    var random = Math.floor(Math.random()* clsOf2021.length);
    // style it differently somehow.
    listItems[random].style.backgroundColor = "green";
}
                                                  
                                                  
function makeLIfromName(name) {
        return "<li>" + name + "</li>";
}
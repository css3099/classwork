//Array of student names
clsOf2020 = ['Alex','Ricardo','Yonathan','Maison','Cole','Dustin','Emily','Ben'];
//parallel list of student ids for above students.
idsOf2020 = [177848, 176236  ,199542    ,178291  ,184944, 176445 ,176483 , 174995];

/////////////////////////////////////////////////////////////
// Here is my initialization in the ready event
////////////////////////////////////////////////////////////
window.onload = function () {
    //initialize the click event handler of the selectStudent button
    var buttonEL = document.querySelector('#selectStudent');
    buttonEL.addEventListener('click',selectStudent);
    
    //Initialize list of student buttons 
    var listEL = document.querySelector('#studentList');
    //TODO USE A COUNTING LOOP HERE to add all students to the list
    //loop using length of clsOf2020
    for(??????) {
        //add that student name as a LI element inside the list.
        listEL.innerHTML += makeLIfromName("name");
    }
}

function selectStudent(e) {
    //Get array of List Items
    var listItems = document.querySelectorAll(?????);    
    //TODO pick a random index from the list.
    //Math.random returns between 0 and 1 not including 1 
    var random = Math.floor(Math.random()* clsOf2020.length);
    
    //TODO Select that element from listItems array using random and 
    // style it differently somehow.
    listItems[?????].style.???? =  ??????;
}
                                                  
                                                  
function makeLIfromName(name) {
        return "<li>" + name + "</li>";
}
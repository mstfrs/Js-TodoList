//Completed Tasks **********************************************

function completed() {
    var listItems = document.getElementsByTagName("li");
// console.log(listItems);

for (var i = 0; i<listItems.length;i++) {

    listItems[i].addEventListener("click", function () {
        this.classList.toggle("completed");
        
    });  
}
    
}
completed();

//Completed Tasks **********************************************




//Deleted Tasks **********************************************
function deleted() {
    var delbuttons = document.getElementsByTagName("span")

for (var x = 0; x < delbuttons.length; x++) {
    delbuttons[x].addEventListener("click",function(){
        var deletedItem= this.parentElement;
        deletedItem.remove();
    })    
}

    
 }

deleted();
//Deleted Tasks **********************************************
 

var addedtask=document.getElementsByTagName("input")[0];

addedtask.addEventListener("keypress", function(e){
    if (e.keyCode===13) {
        var newtask=document.createElement("li")
        newtask.innerHTML=addedtask.value;
        var newspan=document.createElement("span" )
        var newIcon = document.createElement("i")
        newIcon.setAttribute("class","fas fa-trash")

        newspan.insertBefore(newIcon,newspan.firstChild);
        newtask.insertBefore(newspan,newtask.firstChild);

        var tasks=document.getElementsByTagName("ul")[0];
        tasks.insertBefore(newtask,tasks.lastChild);

        deleted();
        completed();
        addedtask.value="";

         
    }

})
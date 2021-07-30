
$(function(){
    $(".blink").typed({
        strings : ["Eter your Todo", "Enter your Todo"],
        typeSpeed: 0,
        loop:true,
        
    });
});
"use strict";

// alert("hello");

var add = document.getElementById("add");
var remove = document.getElementById("remove");
var list = document.getElementById("list");


// removing all

remove.addEventListener("click", () => {
    list.innerHTML = '';
});

// adding new element
function searchKeyPress(event){
    if(event.keyCode === 13){

        addLis(list);
        document.getElementById('userinput').value = '';
        document.getElementById('userinput').focus(); 
    }
}

add.onclick = function () {
    addLis(list);
    document.getElementById('userinput').value = '';
    document.getElementById('userinput').focus();

}

function addLis(targetUl) {

    var inputText = document.getElementById('userinput').value;
    var li = document.createElement("li");
    var TextNode = document.createTextNode(`${inputText}` + ' ');
    var removeButton = document.createElement("button");


    if (inputText !== '') {
        removeButton.className ='btn btn-xs btn-danger';
        removeButton.innerHTML = " &times; ";
        removeButton.setAttribute('onclick', 'removeParticular(this)');

        li.appendChild(TextNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    } else {
        alert("Please enter a TODO first!");
    }
}


function removeParticular(item) {
    // item.innerHTML = ''; --> its delete only &times;

    var liDelete = item.parentElement;
    // console.log(liDelete); // getting li of button
    // console.log(liDelete.parentElement); // getting ul 
    liDelete.parentElement.removeChild(liDelete);
    
}
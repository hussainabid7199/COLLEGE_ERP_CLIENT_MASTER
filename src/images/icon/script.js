var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}


var dropDown = document.querySelector(".drop-down");
var drop = document.querySelector(".drop");

dropDown.onclick = function(){
    drop.classList.toggle("hide-drop");
}
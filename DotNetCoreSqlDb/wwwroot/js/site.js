// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function check_desc(){
	
    var description = document.getElementById("desc");
    if(description.value.trim()== ""){
        alert("La description ne doit pas être vide");
    }
}
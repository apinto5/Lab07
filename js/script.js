function init(){

document.getElementById("entrybutton").addEventListener("click", myFunction);

function myFunction(){	
    var userInput = document.getElementById('entryinput').value
    document.getElementById('textoutput').innerHTML = userInput;
    alert('Alexander Pinto: ' + userInput);
}};

window.addEventListener('load', init);

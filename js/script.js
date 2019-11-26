function init(){

document.getElementById("entrybutton").addEventListener("click", buttonFunction);

function buttonFunction(){
	
    var userInput = document.getElementById('entryinput').value
    document.getElementById('textoutput').innerHTML = userInput;
alert('Alexander: ' + input);
}};

window.addEventListener('load', init);

console.log('link worked!')

window.onload = function () {
var field = document.getElementById("div0");
var ron = document.getElementById("ron");
var ginny = document.getElementById("ginny");
};

var moveRon = 0;
var moveGinny = 0; 
var ron = document.getElementById("ron")
var ginny = document.getElementById("ginny")

document.addEventListener('keydown', function(event) {
    if (event.which === 82) {
    	moveRon += 50;
    	ron.style.marginRight = moveRon +"px";
    	console.log('sanity check: moveron');
    	checkWinner();
	}
});

document.addEventListener('keydown', function(event) {
    if (event.which === 71) {
    	moveGinny += 50;
    	ginny.style.marginLeft = moveGinny +"px";
    	console.log('sanity check: moveginny');
    	checkWinner();
	}
});


function checkWinner(){
	var ronPosition= parseInt(ron.style.marginRight.split("px")[0])
	var ginnyPosition= parseInt(ginny.style.marginLeft.split("px")[0])
	var winPosition = left.offsetWidth - 100;
	if (ronPosition >= winPosition) {
		window.alert("Ron wins!");
};
	if (ginnyPosition >= winPosition) {
		window.alert("Ginny wins!");	
};

};


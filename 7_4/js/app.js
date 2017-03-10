//write a JavaScript function named outer function. 
//Pass an inner function as argument to outer function. 
//Call the inner function within outer function that should display “Hello World From Inner Function” in console.
	
function outer(inner){
  inner();
}	
	
outer(function(){
	console.log("Hello World");
})	
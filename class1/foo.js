var base = "this is in f1 in global namespace";
var x = "x in the global namespace";
var f2 = function(){
    console.log("this is f2");
};
//if you type f2 into console, you get the definition of the function
//if you type f2() into the console, you run the function

var f1 = {
    y : "something in the f1 namespace",
    f2 : f2,
    f : function(){
	console.log("function in f");
	console.log(base);
	console.log(x);
	console.log(f1.y);
    }
};
//f1.y and f1["y"] in the console would give you "something in the f1 namespace"
//f1.f2 and f1["f2"] in the console gives you the definition of f2

var makeIncrementer = function(){
    var counter=0;
    function lambda(){
	counter=counter+1;
	return counter;
    }
    return lambda;
}

var adder = function(){
    var counter=0;
    function lambda(n){
	counter=counter+n;
	return counter;
    }
    return lambda;
}

function draw(){
    var c = document.getElementById("vimage");
    var down = true;
    var right = true;
    var IntervalID;
    var x=250;
    var y=0;
    /*
      var c = document.createElementNS("http://www.w3.org/2000/svg","image");
      c.setAttribute("width",675px);
      c.setAttribute("height",450px);
      pic.appendChild(c);
    */
    var animate = function animate(){
        //    var x = document.getElementsByTagName("image")[0];
        c.setAttribute("x",x);
        c.setAttribute("y",y);
        if(down==true){
            y=y+1;
        }else{
            y=y-1;
        }
        console.log("y: " + y);
        if(right==true){
            x=x+1;
        }else{
            if(right==false){
                x=x-1;
            }
        }
        if(x>=425){
            right=false;
        }else{
            if(x<=0){
                right=true;
            }
        }
        console.log("x: " + x);
        if(y>=450){
            down=false;
        }else{
            if(y<=0){
                down=true;
            }
        }
    };
    var stop = function stop(){
	      IntervalID = clearInterval(IntervalID);
    }
    document.getElementById("stopScreen").addEventListener("click",stop);
    IntervalID=window.setInterval(animate,16);
}
document.getElementById("startScreen").addEventListener("click",draw);

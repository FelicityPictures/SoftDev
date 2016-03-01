var pic = document.getElementById("vimage");

function draw(){
    var r =  0;
    var requestID;
    var grow = true;
    while(pic.lastChild){
	pic.removeChild(pic.lastChild);
    }
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",250);
    c.setAttribute("cy",250);
    c.setAttribute("r",r);
    c.setAttribute("fill","red");
    c.setAttribute("stroke","blue");
    pic.appendChild(c);
    if(grow==true && r     <pic.width/2 && r     <pic.height/2){
        r     =r     +1;
    }else{
        if(r     ==pic.width/2 || r==pic.height/2){
            grow=false;
        }
        if(r==0){
            grow=true;
            r=2;
        }
        r=r-1;
    }
    requestID=window.requestAnimationFrame(draw);
    console.log("yes");
    var stop = function stop(){
	window.cancelAnimationFrame(requestID);
    }
//  document.getElementById("stopCircle").addEventListener("click",stopC);
    draw();

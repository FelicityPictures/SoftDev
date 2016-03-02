function draw(){
    var pic = document.getElementById("vimage");
    var r = 1;
    var IntervalID;
    var grow = true;
    while(pic.lastChild){
	      pic.removeChild(pic.lastChild);
    }
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",250);
    c.setAttribute("cy",250);
    c.setAttribute("r",r);
    c.setAttribute("fill","red");
    c.setAttribute("stroke","black");
    pic.appendChild(c);
    var animate = function animate(){
        var x = document.getElementsByTagName("circle")[0];
        x.setAttribute("r",r);
        if(grow==true){
            r=r+1;
      //      console.log("r++");
        }else{
            r=r-1;
     //       console.log("r--");
        }
   //     console.log(pic.style.width/2);
        if(r>=250 || r>=250){
            grow=false;
   //         console.log("grow=false");
        }else{
            if(r<=0){
                grow=true;
    //            console.log("grow=true");
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

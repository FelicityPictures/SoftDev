var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var temp1,temp2;
var prevX = -1;
var prevY = -1;
var l = c.offsetLeft;
var t = c.offsetTop;

c.addEventListener("click",function(){
    temp1=event.clientX - l;
    temp2=event.clientY - t;
    ctx.beginPath();
    ctx.arc(temp1,temp2,5,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    if(prevX!=-1 && prevY!=-1){
        ctx.beginPath();
        ctx.moveTo(temp1,temp2);
        ctx.lineTo(prevX,prevY);
        ctx.stroke();
        ctx.closePath();
    }
    prevX = temp1;
    prevY = temp2;
});

var clear = document.getElementById("clear");
clear.addEventListener("click",function(){
    ctx.clearRect(0, 0, c.width, c.height);
    prevX = -1;
    prevY = -1;
    console.log("done");
});

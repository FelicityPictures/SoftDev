var radius=0;
var grow=true;
var canvas=document.getElementById("canvas");
var c=canvas.getContext("2d");
var requestId;

c.fillStyle="#00BFFF";
c.strokeStyle="#2E9AFE";

function clear(){
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(){
    clear();
    c.beginPath();
    c.arc(canvas.width/2,canvas.height/2,radius,0,2*Math.PI);
    c.fill();
    c.stroke();
    c.closePath();
    if(grow==true && radius<canvas.width/2 && radius<canvas.height/2){
        radius=radius+1;
    }else{
        if(radius==canvas.width/2 || radius==canvas.height/2){
            grow=false;
        }
        if(radius==0){
            grow=true;
            radius=2;
        }
        radius=radius-1;
    }
    requestId=window.requestAnimationFrame(draw);
}

function stop(){
    requestId=window.cancelAnimationFrame(requestId);
}

document.getElementById("start").addEventListener("click",draw);
document.getElementById("stop").addEventListener("click",stop);

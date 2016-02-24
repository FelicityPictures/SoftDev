var canvas=document.getElementById("canvas");
var c=canvas.getContext("2d");
var logo=new Image(600,400)
logo.src="logo_dvd.jpg";
var x=200;
var y=0;
var up = false;
var right = true;
var requestId;

function clear(){
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(){
    clear();
    c.beginPath();
    c.drawImage(logo,x,y,60,40);
    c.closePath();
    if(up==true){
        y=y-1;
    }else{
        y=y+1;
    }
    if(right==true){
        x=x+1;
    }else{
        x=x-1;
    }
    if(y>=canvas.height-40){
        up=true;
    }else{
        if(y<=0){
            up=false;
        }
    }
    if(x>=canvas.width-60){
        right=false;
    }else{
        if(x<=0){
            right=true;
        }
    }
    requestId=window.requestAnimationFrame(draw);
}

function stop(){
    requestId=window.cancelAnimationFrame(requestId);
}

document.getElementById("start").addEventListener("click",draw);
document.getElementById("stop").addEventListener("click",stop);

var canvas=document.getElementById("canvas");
var c=canvas.getContext("2d");
var radius=0;
var grow=true;
var logo=new Image(600,400)
logo.src="logo_dvd.jpg";
var x=200;
var y=0;
var up = false;
var right = true;
var requestIdSS,requestIdC;
c.fillStyle="#00BFFF";
c.strokeStyle="#2E9AFE";

function clear(){
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSS(){
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
    requestIdSS=window.requestAnimationFrame(drawSS);
}

function stopSS(){
    requestIdSS=window.cancelAnimationFrame(requestIdSS);
}

function drawC(){
    clear();
    c.beginPath();
    c.arc(canvas.width/2,canvas.height/2,radius,0,2*Math.PI);
    c.fill();
    c.stroke();
    c.closePath();
    if(grow==true && radius<canvas.width/2 && radius<canvas.height/2){
        radius=radius+1;
        console.log("radius++");
    }else{
        if(radius==canvas.width/2 || radius==canvas.height/2){
            grow=false;
            console.log("grow=false");
        }
        if(radius==0){
            grow=true;
            radius=2;
        }
        radius=radius-1;
        console.log("radius--");
    }
    requestIdC=window.requestAnimationFrame(drawC);
}

function stopC(){
    requestIdC=window.cancelAnimationFrame(requestIdC);
}

document.getElementById("startCircle").addEventListener("click",drawC);
document.getElementById("stopCircle").addEventListener("click",stopC);
document.getElementById("startScreen").addEventListener("click",drawSS);
document.getElementById("stopScreen").addEventListener("click",stopSS);

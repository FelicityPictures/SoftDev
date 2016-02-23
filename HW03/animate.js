var canvas=document.getElementById("canvas");
var c=canvas.getContext("2d");
var logo=newImage().src="logo_dvd.jpg";
var x=200;
var y=0;
/*
1=up right
2=down right
3=down left
4=up left
*/
var direction=2;
var requestId;

c.fillStyle="#00BFFF";
c.strokeStyle="#2E9AFE";

function clear(){
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(){
    clear();
    c.beginPath();
    c.drawImage(logo,x,y,60,40);
    c.closePath();
    if(direction==2){
	x=x+1;
	y=y+1;
    }else{
	if(direction==3){
	x=x-1;
	y=y+1;
	}else{
	    if(direction==4){
		x=x+1;
		y=y-1;
	    }else{
		if(durection==1){
		    x=x-1;
		    y=y-1;
		}
	    }
	}
    }
    if(y==canvas.height){
	direction=4;
    }
    if(x==canvas.width){
	direction=3;
    }
    if(y==0){
	direction=2;
    }
    if(x==0){
	direction=1;
    }
    requestId=window.requestAnimationFrame(draw);
}

function stop(){
    requestId=window.cancelAnimationFrame(requestId);
}

document.getElementById("start").addEventListener("click",draw);
document.getElementById("stop").addEventListener("click",stop);

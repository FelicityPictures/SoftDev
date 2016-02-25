var requestIdSS;

function drawSS(){
    var canvas=document.getElementById("canvas");
    var c=canvas.getContext("2d");
    var logo=new Image(600,400)
    logo.src="logo_dvd.jpg";
    var x=200;
    var y=0;
    var up = false;
    var right = true;
    var drawLogo=function drawLogo(){
        c.clearRect(0, 0, canvas.width, canvas.height);
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
        requestIdSS=window.requestAnimationFrame(drawLogo);
    };
    var stopSS = function stopSS(){
        window.cancelAnimationFrame(requestIdSS);
    };
    document.getElementById("stopScreen").addEventListener("click",stopSS);
    drawLogo();
}

document.getElementById("startScreen").addEventListener("click",drawSS);

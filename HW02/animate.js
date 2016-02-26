function drawC(){
    var canvas=document.getElementById("canvas");
    var c=canvas.getContext("2d");
    var radius=0;
    var grow=true;
    c.fillStyle="#00BFFF";
    c.strokeStyle="#2E9AFE";
    var requestIdC;
    var drawCircle=function drawCircle(){
        c.clearRect(0, 0, canvas.width, canvas.height);
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
        requestIdC=window.requestAnimationFrame(drawCircle);
    };
    var stopC = function stopC(){
        window.cancelAnimationFrame(requestIdC);
    }
    document.getElementById("stopCircle").addEventListener("click",stopC);
    drawCircle();
}

document.getElementById("startCircle").addEventListener("click",drawC);

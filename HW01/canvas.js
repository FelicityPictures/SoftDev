var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

//color of the inside of the shapes you will draw
ctx.fillStyle="#000000";

//draws the shape (x,y,width,height)
ctx.fillRect(0,0,538,538);

//moves "pen" to (x,y) position
ctx.moveTo(269,269);

//puts down "pen"
ctx.beginPath();

//color of your lines
ctx.strokeStyle="#FFFF00";

//draws an arc (x,y,radius,starting angle,ending angle)
//angles are in radians and begin at 3 o'clock
ctx.arc(269,269,150,0,2*Math.PI);

//makes visible the moves you did with your "pen" as it was down
//closes shape, starting from where pen was put down to
ctx.stroke();

ctx.moveTo(200,300);
//draws line from last coordinates where your "pen" was to (x,y) in function
ctx.lineTo(269,350);

ctx.stroke();
ctx.lineTo(338,300);
ctx.stroke();

//picks up "pen"
ctx.closePath();

ctx.beginPath();
ctx.arc(205,225,15,0,2*Math.PI);
ctx.fillStyle="#FFFF00";

//fills the shape you drew
ctx.fill();

ctx.strokeStyle="#FFFF00";
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(333,225,15,0,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="#FF0000";

//draws an empty rectangle (x,y,width,height)
ctx.strokeRect(254,259,30,20);

ctx.closePath();

ctx.fillStyle="#0000FF";

//changes style,variant,weight,soze,height,family of the font
ctx.font="bold 60px arial";

//draws text onto canvas (String,x,y,maxWidth)
//x,y is where to begin writing; maxWidth is optional
ctx.fillText("Smile!",180,500);

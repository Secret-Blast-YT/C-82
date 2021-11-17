var mouseEvent = "empty";

var lastpositionofX, lastpositionofY;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var color = "blue";

var  width_of_line = 1;

canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e){
    mouseEvent = "mouseDown";
    color = document.getElementById("color").value
    width_of_line =document.getElementById("width_of_line").value
}

canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e){
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e){
    mouseEvent = "mouseeave";
}

canvas.addEventListener("mousemove", myMousemove);
function myMousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = width_of_line;

        console.log("lastpositionofX = "+lastpositionofX + ",lastpositionofY = "+lastpositionofY) ;
        ctx.moveTo(lastpositionofX, lastpositionofY);

        console.log("currentpositionofX = "+current_position_of_mouse_x + ",currentpositionofY = "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke()
    }
    lastpositionofX = current_position_of_mouse_x;
    lastpositionofY = current_position_of_mouse_y
}

var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

        current_position_of_touch_x = e.clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.clientY - canvas.offsetTop;
        
        if ( mouseEvent == "mouseDown"){
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
            ctx.moveTo(last_position_of_x, last_position_of_y);
            ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
            ctx.stroke();  
        }
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
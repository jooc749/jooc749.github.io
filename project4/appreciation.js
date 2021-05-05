console.log("hi");

//the user clicks the download button to download an image of the card(canvas)they created 
function capture(){
    const capture = document.querySelector('#download_canvas')
    html2canvas(capture)
    .then(canvas => {
        document.body.appendChild(canvas)
        canvas.style.display = 'none'
        return canvas
    })
    .then (canvas => {
        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
        const a = document.createElement('a')
        a.setAttribute('download', 'my-card.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
    })



}

var c = document.getElementById("download_canvas");
var ctx = c.getContext("2d");

function myFunction() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    

    
    ctx.font = "16px Verdana";
    ctx.textAlign = 'center';
    ctx.fillText('Thank you', ctx.canvas.width/2, 130);
    ctx.fillText('Front Line!', ctx.canvas.width / 2, 150);

    
}




//TROUBLESHOOT: with capture function, captured image shows background color change and drawing input, but does not show the text ("greeting" div)

//assign the actual download or "capture" function to the button 
const btn = document.querySelector('#btn')
btn.addEventListener('click', capture)



//the user can change the background color of their card (canvas) through a color picker
function docolor(){
    console.log("color change running");
    var myCanvas = document.querySelector("#download_canvas");
    var colorinput = document.querySelector("#clr");
    var color = colorinput.value;
    myCanvas.style.backgroundColor = color;
}


//the user can draw on the card (canvas)
var mousePressed = false;
var lastX, lastY;
var ctx;

function InitThis(){
    ctx=document.getElementById('download_canvas').getContext("2d");

    $('#download_canvas').mousedown(function(e){
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#download_canvas').mousemove(function(e){
        if (mousePressed){
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#download_canvas').mouseup(function (e){
        mousePressed = false;
    });

    $('#download_canvas').mouseleave(function(e){
        mousePressed = false;
    });
}


function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}

function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


//the user can clear their drawings on the card with a click of a button 	
var c = document.getElementById("download_canvas");
var ctx = c.getContext("2d");

function secondFunction() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    

    
    ctx.font = "16px Verdana";
    ctx.textAlign = 'center';
    ctx.fillText('From our social bubble', ctx.canvas.width/2, 130);
    ctx.fillText('to yours!', ctx.canvas.width / 2, 150)
    
}

// //the user can toggle between different greetings with a click of a button
// function myFunction(){
//     if (document.getElementsByClassName('.firstView'). style.display ==="none"){
//         document.querySelector('.lastView').style.display = 'none';
//         document.querySelector('.firstView').style.display = 'block';
//     } else{
//         document.querySelector('.firstView').style.display='none';
//         document.querySelector('.lastView').style.display = 'block';
//     }

// }

// dragElement(document.getElementById("tools"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

alert("Use your mouse to draw on your card.");

console.log("hi");

// var canvas = document.getElementById('download_canvas');

// window.onload = function(){
//     init();
// };


// function init(){
//     var context = canvas.getContext('2d');
    
//     context.beginPath();
// }

// function downloadCanvas(){
//     var image = canvas.toDataURL("image/jpg", 1.0);

//     var tmpLink = document.createElement('a');
//     tmpLink.download = 'my_card.jpeg';
//     tmpLink.href = image;

//     document.body.appendChild(tmpLink);
//     tmpLink.click();
//     document.body.removeChild(tmpLink);
// }

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

const btn = document.querySelector('#btn')
btn.addEventListener('click', capture)


function docolor(){
    console.log("color change running");
    var myCanvas = document.querySelector("#download_canvas");
    var colorinput = document.querySelector("#clr");
    var color = colorinput.value;
    myCanvas.style.backgroundColor = color;
}


// a version of code to get user text input on card canvas
// var canvas = document.getElementById('download_canvas');
//     ctx = canvas.getContext('2d'),
//     font = '16px sans-serif',
//     hasInput = false;

// canvas.onclick = function (e){
//     if (hasInput) return;
//     addInput(e.clientX, e.clientY);
// }

// function addInput (x,y){
//     var input = document.createElement('input');

//     input.type = 'text';
//     input.style.position = 'fixed';
//     input.style.left = (x) + 'px';
//     input.style.top = (y) + 'px';


//     input.onkeydown = handleEnter;

//     document.body.appendChild(input);

//     input.focus();

//     hasInput = true;
// }

// function handleEnter(e){
//     var keyCode = e.keyCode;
//     if (keyCode === 13){
//         drawText(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
//         document.body.removeChild(this);
//         hasInput = false;
//     }
// }

// function drawText(txt, x, y){
//     ctx.textBaseline = 'top';
//     ctx.textAlign = 'left';
//     ctx.font = font;
//     ctx.fillText(txt, x, y);
//     ctx.color = 'black';
// }



//this is code from glitch demo for inputing text 

// let inputElement = document.querySelector("#input");

// let result = document.querySelector("#result");

// inputElement.addEventListener("keydown", function(event){
//     if (event.key == "Enter"){
        
//         console.log(inputElement.value);

//         result.innerText = inputElement.value;

//         inputElement.value = "";

//     }

// })

var mousePressed = false;
var lastX, lastY;
var ctx;

function InitThis(){
    ctx=document.getElementById('download_canvas').getContext("2d");

    $('#download_canvas').mousedown(function(e){
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
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

// var startx = 0;
// var starty = 0;
// dragStartHandler = function(e){
//     startx = e.clientX;
//     starty = e.clientY;
// }

// dragOverHandler = function(e){
//     e.preventDefault();
//     return false;
// }

// dragEndHandler = function(e){
//     if (start! || !starty){
//         return false;
//     }

//     var diffx = e.clientX -startx;
//     var diffy = e.clientY - starty;

//     var circ= e.target.getBoundingClientCirc ();

//     var offset = {
//         top:circ.top + window.scrollY,
//         left: circ.left +window.scrollX,
//     };

//     var newleft= offset.left +diffx;
//     var newtop= offset.top +diffy;

//     e.target.style.position = 'absolute';
//     e.target.style.left = newleft + 'px';
//     e.target.style.top = newtop +'px';

//     startx = 0;
//     starty= 0;
// }

// document.getElementsByClassName ("draggable")[0].addEventListener ('dragstart', dragStartHandler);
// document.addEventListener('dragover', dragOverHandler);
// document.addEventListener('drop', dragEndHandler);


var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
}

// Bind the functions...
document.getElementById('draggable').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.onmousemove = _move_elem;
document.onmouseup = _destroy;


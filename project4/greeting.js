
window.onload=function(){
    function drawText(event){
        var sketch = document.getElementById("download_canvas");
        var ctx = sketch.getContext("2d");
        var text = document.getElementById('item').value
        ctx.clearRect(0,0,sketch.width, sketch.height);
        ctx.fillStyle = "#3e3e3e";
        ctx.font = "16px Arial";
        ctx.fillText(text, 50, 50);
    }
    window.addEventListener("keyup", drawText, true);
}
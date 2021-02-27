

window.onload = function() {
  var minute = 00;
  var sec = 10;
  setInterval(function() {
    document.getElementById("timer").innerHTML = sec;
    sec--;
    if (sec == 01) {
      minute --;
      sec = 10;
      if (minute == 0) {
        minute --;
      }
    
    }
  }, 1000);

}
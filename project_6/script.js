
var text = document.getElementById("text")
var body = document.querySelector("body")
function Clock(){
  //Gets current time and date
  var d = new Date();
  // Extracts hour from time and date var
  var h = d.getHours();
  // Extracts minutes from time and date var
  var m = d.getMinutes();
  var s = d.getSeconds();
  h = display(h)
  text.innerHTML = `${h}:${m}:${s}`
  changeColor()
}
setInterval(Clock, 1000)
function display(x){
  if(x > 12){
    x -= 12
    return x;
  }
}
var colors =  ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0'];
var index = 0;
function changeColor(){
 if(index < colors.length){
  body.style.backgroundColor = colors[index]
  index++
 } else {
   index = 0;
   body.style.backgroundColor = colors[index]
}
}

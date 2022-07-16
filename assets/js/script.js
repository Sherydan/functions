/*

  Modify this code to:
  1. recveive the clicked element as an argument
  2. pass a color as an argument


  function pintar(){
  ele = document.getElementById("ele1")
  ele.style.backgroundColor = 'yellow'
  }
  ele = document.getElementById("ele1")
  ele.addEventListener("click", pintar);

  @ele: element you want to paint
*/

//select the element you want to paint
let ele = document.getElementById("ele1");

// set color depending on waht arguments are passed
function paint(element, color = "green") {
  element.style.backgroundColor = color;
}

// add listener to the element and call paint function
ele.addEventListener("click", function(){paint(ele, "yellow");});



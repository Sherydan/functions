/*
    When the user presses a key, the current color is selected
    When the user press inside the wrapper, the backgroundColor of that div is changed to the current color

    @currentColor = saves the color selected when a user presses a key (a, s,d)
    @wrapper = contains all the div elements
    @txtCurrentColor = holds a text value repesenting the current color
*/
var currentColor;
let wrapper = document.querySelector("#wrapper");
let txtCurrentColor = document.querySelector("#txtCurrentColor");

// set currentColor dependening on key pressed
document.addEventListener("keydown", function(event) {
    // needs .toLowerCase() just in case the caps lock is on
     if (event.key.toLowerCase() === 'a') {
        currentColor = "black"
        txtCurrentColor.innerHTML = `Your current color is: ${currentColor}`
     }

     if (event.key.toLowerCase() === 's') {
        currentColor = "silver"
        txtCurrentColor.innerHTML = `Your current color is: ${currentColor}`
    }

    if (event.key.toLowerCase() === 'd') {
        currentColor = "orange"
        txtCurrentColor.innerHTML = `Your current color is: ${currentColor}`
    }
});

// set color to any div insde wrapper element
wrapper.addEventListener("click", (e) => { 
    //selects the target div element and updates the current color
    e.target.style.backgroundColor = currentColor;
});
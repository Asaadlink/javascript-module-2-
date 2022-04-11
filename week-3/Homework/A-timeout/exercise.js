/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
let  timeOut = setTimeout(changeBgColor, 5000);

function changeBgColor () {
    document.body.style.backgroundColor = "tomato";
};

const myInterval = setInterval(changeBackgroundColor, 5000);

function changeBackgroundColor () {
    let x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "tomato" ? "pink" : "tomato";
}

setInterval( () => {
    if ((body.style.background = "black")) {
      body.style.background = "red";
      } else                    
      body.style.background = "black";
   }, 1000);
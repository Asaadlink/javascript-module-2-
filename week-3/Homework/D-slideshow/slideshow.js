// Write your code here
let imageArray = [
    "hhttps://cyf-image-carousel.netlify.app/sample-images/kitten1.jpg",
    "https://cyf-image-carousel.netlify.app/sample-images/kitten2.jpg",
    "https://cyf-image-carousel.netlify.app/sample-images/kitten3.jpg",
  ];
  var farBt = document.getElementById("forward");
  farBt.addEventListener("click", forwardFun);
  
  var bckBt = document.getElementById("backward");
  bckBt.addEventListener("click", backwardFun);
  
  function forwardFun() {
    var imgCntin = document.getElementById("imgHeading").src;
    var indexNum = imageArray.indexOf(imgCntin);
    console.log(indexNum);
    if (indexNum >= 3) {
      indexNum = 0;
    } else {
      indexNum++;
    }
    var imgChange = document.getElementById("imgHeading");
    imgChange.src = imageArray[indexNum];
  }
  
  function backwardFun() {
    var imgCntin = document.getElementById("imgHeading").src;
    var indexNum = imageArray.indexOf(imgCntin);
    console.log(indexNum);
    if (indexNum <= 0) {
      indexNum = 3;
    } else {
      indexNum--;
    }
    var imgChange = document.getElementById("imgHeading");
    imgChange.src = imageArray[indexNum];
  }

  //new
  var delayTimer = document.getElementById("delay").value;
  if (delayTimer === ""){
      delayTimer = 1000;
  }else{
      delayTimer = parseInt(delayTimer)
  }
  //
  var autoForBt = document.getElementById("autoForward");
  autoForBt.addEventListener("click", autoForwardFun);
  
  function autoForwardFun() {
    var i = 0;
    function counter() {
      if (i > 3) {
        clearInterval(id);
      } else {
        let imgChange = document.getElementById("imgHeading");
        imgChange.src = imageArray[i];
        i++;
      }
    }
    //new
    var delayTimer = document.getElementById("delay").value;
  if (delayTimer === ""){
      delayTimer = 1000;
  }else{
      delayTimer = parseInt(delayTimer) * 1000
  }
    var id = setInterval(counter, delayTimer);
  }
  
  var autoBckBt = document.getElementById("autoBackward");
  autoBckBt.addEventListener("click", autoBackwardFun);
  
  function autoBackwardFun() {
    var i = 3;
    function counter() {
      if (i < 0) {
        clearInterval(id);
      } else {
        let imgChange = document.getElementById("imgHeading");
        imgChange.src = imageArray[i];
        i--;
      }
    }
    var delayTimer = document.getElementById("delay").value;
  if (delayTimer === ""){
      delayTimer = 1000;
  }else{
      delayTimer = parseInt(delayTimer) * 1000
  }
    var id = setInterval(counter, delayTimer);
  }
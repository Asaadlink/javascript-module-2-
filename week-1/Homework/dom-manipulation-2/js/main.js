///-------------Part 1---------------///

// Selecting buttons

const selectBlueButton = document.querySelector("#blueBtn");
const selectOrangeButton = document.querySelector("#orangeBtn");
const selectGreenButton = document.querySelector("#greenBtn");
const jumbotron = document.querySelector(".jumbotron");
const donateBikeButton = document.querySelector(".buttons .btn-primary ");
const volunteerButton = document.querySelector(".buttons .btn-secondary ");

// Adding event listener for Blue Button
selectBlueButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#588fbd";
  donateBikeButton.style.backgroundColor = "#ffa500";
  volunteerButton.style.backgroundColor = "black";
  volunteerButton.style.color = "white";
});

// Adding event listener for Orange Button
selectOrangeButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateBikeButton.style.backgroundColor = "#5751fd";
  volunteerButton.style.backgroundColor = "#31b0d5";
  volunteerButton.style.color = "white";
});

// Adding event listener for Green Button
selectGreenButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateBikeButton.style.backgroundColor = "black";
  volunteerButton.style.backgroundColor = "#8c9c08";
});

///-------------Part 2---------------///

// STEP 1 Selecting DOM elements
const selectForm = document.querySelector("form");
const selectSubmitButton = document.querySelector("form button");
const inputEmail = document.querySelector("#exampleInputEmail1");
const inputName = document.querySelector("#example-text-input");
const describeYourselfArea = document.querySelector("#exampleTextarea");

// STEP 2 Creating Event Handler
function onSubmit(e) {
  {
    e.preventDefault();
    if (
      inputEmail.value.trim().length === 0 ||
      inputEmail.value.trim().includes("@") === false
    ) {
      inputEmail.style.backgroundColor = "red";
    } else if (inputName.value.trim().length === 0) {
      inputName.style.backgroundColor = "red";
    } else if (describeYourselfArea.value.trim().length === 0) {
      describeYourselfArea.style.backgroundColor = "red";
    } else {
      alert("Thank you for filling out the form");
      inputEmail.value = "";
      inputName.value = "";
      describeYourselfArea.value = "";
    }
  }
}

/// Adding event listener
selectSubmitButton.addEventListener("click", onSubmit);
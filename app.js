const rating = document.querySelectorAll(".ratingbtn span");
const submit = document.getElementById("submit");
const ratingCard = document.querySelector(".rating");
const thankyouCard = document.querySelector(".thankyou");
const selected = document.getElementById("selected");
let selectedValue = null;

rating.forEach((button) => {
  button.addEventListener("click", function () {
    rating.forEach((button) => button.classList.remove("checked"));
    button.classList.add("checked");
    selectedValue = button.textContent;
  });
});

ratingCard.classList.remove("hidden");
thankyouCard.classList.add("hidden");

submit.addEventListener("click", function () {
  if (selectedValue) {
    selected.innerText = selectedValue;
    ratingCard.classList.add("hidden");
    thankyouCard.classList.remove("hidden");
  }
});
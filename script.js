//your JS code here. If required.
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function () {
  const currentValue = parseInt(counter.innerText);
  alert(currentValue);
  counter.innerText = currentValue + 1;
});
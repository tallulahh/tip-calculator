var percentInput = document.querySelector("#customRange1");
var percentDisplay = document.querySelector("#percentDisplay");
var percentPicker = document.querySelector(".percentPicker");
var billInput = document.querySelector("#bill");
var checkTotal = document.querySelector(".checkTotal");
var totalDisplay = document.querySelector(".totalDisplay");

function checkInput(){
  if (billInput.value === ""){
    alert("Oops, check you wrote the right total");
  } else {
    checkTotal.style.display = "none";
    let total = billInput.value;
    let percent = percentInput.value;
    calculateTip(total, percent);
  }
}

function showPercent(){
  percentDisplay.innerHTML = percentInput.value + "%";
}

function nextPage(){
  percentPicker.style.display = "none";
  checkTotal.style.display = "flex";
}

function calculateTip(total, percent){
  var tip = (total/100) * percent;
  showTip(tip);
}

function showTip(tip){
  totalDisplay.innerHTML = "£" + tip.toFixed(2);
  totalDisplay.style.display = "flex";
  console.log(tip.toFixed(2));
}

function startAgain(){
  totalDisplay.style.display = "none";
  percentPicker.style.display = "flex";
}

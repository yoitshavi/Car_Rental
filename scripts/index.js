"use strict";

window.onload = function () {
  const estimatBtnEl = document.getElementById("estimateBtn");
  estimatBtnEl.onclick = onEstimateBtnClicked;
  let noChecked = document.getElementById("no");
  noChecked.onclick = onHideOrShowUnderNo;
  let yesChecked = document.getElementById("yes");
  yesChecked.onclick = onHideOrShowUnderYes;
};

function onHideOrShowUnderNo() {
  let underTotalBoxEl = document.getElementById("underTotalBox");
  let noEl = document.getElementById("no");
  if (noEl.checked) {
    underTotalBoxEl.style.display = "none";
  } else {
    underTotalBoxEl.style.display = "block";
  }
}
function onHideOrShowUnderYes() {
  let underTotalBoxEl = document.getElementById("underTotalBox");
  let yesEl = document.getElementById("yes");
  if (yesEl.checked) {
    underTotalBoxEl.style.display = "block";
  } else {
    underTotalBoxEl.style.display = "none";
  }
}

function onEstimateBtnClicked() {
  const pickupDateEl = document.getElementById("pickupDate");
  const userDate = pickupDateEl.value;
  const numberDaysEl = document.getElementById("numberDays");
  const userDays = numberDaysEl.value;
  const basePremium = 29.99;

  let extraPerDay = 0;
  if (document.getElementById("tollTag").checked) {
    extraPerDay += 3.95;
  }
  if (document.getElementById("gps").checked) {
    extraPerDay += 4.95;
  }
  if (document.getElementById("roadside").checked) {
    extraPerDay += 2.95;
  }

  let selectedOption = document.querySelector("input[name='policy']:checked");
  let surchargeAmt = 0;
  if (selectedOption.value == "No") {
    surchargeAmt = 0.0;
  } else if (selectedOption.value == "Yes") {
    surchargeAmt = 0.3;
  }

  const rentTotal = (basePremium * userDays).toFixed(2);
  const opTotal = (extraPerDay * userDays).toFixed(2);
  const surTotal = (surchargeAmt * (basePremium * userDays)).toFixed(2);
  const totalD = rentTotal + opTotal + surTotal;

  const rentalTotalEl = document.getElementById("rentalTotal");
  rentalTotalEl.value = rentTotal;
  const optionsTotalEl = document.getElementById("optionsTotal");
  optionsTotalEl.value = opTotal;
  const surchargeTotalEl = document.getElementById("surchargeTotal");
  surchargeTotalEl.value = surTotal;
  const totalDueEl = document.getElementById("totalDue");
  totalDueEl.value = (
    basePremium * userDays +
    extraPerDay * userDays +
    surchargeAmt * (basePremium * userDays)
  ).toFixed(2);
}

// checkbox
// electronic toll tagg = tollTag 3.95 a day
// gps = gps 4.95 a day
// roadside assistance = roadside 2.95 a day
//
//radio
// no
//yes
//
//totals
//car rental = rentalTotal
//options = optionsTotal
//surcharge = surchargeTotal
//total due = totalDue
//--------------------------

//checkbox((((let basePremium = 0;
//if (document.getElementById("auto").checked) {
//basePremium = 175.00;
//}
//else if (document.getElementById("home").checked) {
//basePremium = 395.00;
//}
//else { // it must be life!
//basePremium = 225.00;
//}
//))))

//radio button(((let selectedOption =
//document.querySelector("input[name='policy']:checked");
//let basePremium = 0;
//if (selectedOption.value == "auto") {
//basePremium = 175.00;
//}
//else if (selectedOption.value == "home") {
//basePremium = 395.00;
//}
//else {
//basePremium = 225.00;
//}))))

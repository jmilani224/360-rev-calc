
const todaysDate = () => {
    const fullDate = [];
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth();
    fullDate.push(month, date);
    return fullDate;
}

const daysPassed = callBack => {
  const dateArr = callBack();
  let dayValue = dateArr[1];
  let monthValue;
  switch (dateArr[0]) {
    case 0:
      monthValue = 0; //jan
      break;
    case 1:
      monthValue = 31; //feb
      break;
    case 2:
      monthValue = 59; //mar
      break;
    case 3:
      monthValue = 90; //apr
      break;
    case 4:
      monthValue = 120; //may
      break;
    case 5:
      monthValue = 151; //jun
      break;
    case 6:
      monthValue = 181; //jul
      break;
    case 7:
      monthValue = 212; //aug
      break;
    case 8:
      monthValue = 243; //sep
      break;
    case 9:
      monthValue = 273; //oct
      break;
    case 10:
      monthValue = 304; //nov
      break;
    case 11:
      monthValue = 334; //dec
      break;
  }
  
  return monthValue + dayValue;
  
}

const scottGoal = 2000000; // This is what Scott H thinks we'll need in 360 revenue to hit the goal
let revGoal = scottGoal;

const daysLeft = callBack => {
  return 365 - callBack;
}

const remainingDays = daysLeft(daysPassed(todaysDate));

const personDays = v => {
  const pDays = revGoal / 7;
  return pDays / v;
}


const counter = document.querySelector('.counter');
const subs = Math.ceil(personDays(remainingDays));
counter.innerHTML = Math.ceil(personDays(remainingDays));

const form = document.querySelector("form")
const input = document.querySelector('.input');
const button = document.querySelector('.submit');

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

let revenue;

const reCalc = () => {
  revenue = input.value;
  revGoal = scottGoal;
  revGoal -=revenue; 
  counter.innerHTML = Math.ceil(personDays(remainingDays));
}

button.addEventListener("click", reCalc);
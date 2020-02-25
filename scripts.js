
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
  let dayValue = dateArr[1] - Math.floor(((dateArr[1] / 7) * 2)); 
  let monthValue;
  switch (dateArr[0]) {
    case 0:
      monthValue = 0; //jan
      break;
    case 1:
      monthValue = 23; //feb
      break;
    case 2:
      monthValue = 43; //mar
      break;
    case 3:
      monthValue = 65; //apr
      break;
    case 4:
      monthValue = 87; //may
      break;
    case 5:
      monthValue = 108; //jun
      break;
    case 6:
      monthValue = 130; //jul
      break;
    case 7:
      monthValue = 153; //aug
      break;
    case 8:
      monthValue = 174; //sep
      break;
    case 9:
      monthValue = 196; //oct
      break;
    case 10:
      monthValue = 218; //nov
      break;
    case 11:
      monthValue = 239; //dec
      break;
  }
  
  return monthValue + dayValue;
  
}

const scottGoal = 2000000; // This is what Scott H thinks we'll need in 360 revenue to hit the goal
const smoothieCost = 7;
let revGoal = scottGoal;

const daysLeft = callBack => {
  return 261 - callBack;
}

const remainingDays = daysLeft(daysPassed(todaysDate));

const personDays = days => {
  const pDays = revGoal / smoothieCost;
  return pDays / days;
}


const counter = document.querySelector('.counter');
let subs = Math.ceil(personDays(remainingDays));
counter.innerHTML = subs;

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
  revGoal -= revenue; 
  if (parseInt(input.value, 10) === NaN) {
    return
  } else {
    counter.innerHTML = Math.ceil(personDays(remainingDays));
  }
}

button.addEventListener("click", reCalc);

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

const daysLeft = callBack => {
  return 365 - callBack;
}

const remainingDays = daysLeft(daysPassed(todaysDate));

const personDays = v => {
  const pDays = 1000000 / 7.50;
  return pDays / v;
}

const counter = document.querySelector('.counter');

counter.innerHTML = Math.ceil(personDays(remainingDays));

//console.log(remainingDays);
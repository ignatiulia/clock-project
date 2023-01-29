const clockTime = document.getElementById('time');
const clockDate = document.getElementById('date');

let hourBox = document.getElementById('hour');
let minutesBox = document.getElementById('minutes');
let secondsBox = document.getElementById('seconds');

function getTime() {
  const time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hour < 10) {
    hour = '0' + hour;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  hourBox.innerText = `${hour}:`;
  minutesBox.innerText = `${minutes}:`;
  secondsBox.innerText = `${seconds}`;

  const exactTime = `${hour} ${minutes} ${seconds}`;

  return exactTime;
}

setInterval(getTime, 1000);

let dayBox = document.getElementById('day');
let monthBox = document.getElementById('month');
let yearBox = document.getElementById('year');

function getDate() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }

  if (month < 10) {
    month = '0' + month;
  }

  dayBox.innerText = `${day}.`;
  monthBox.innerText = `${month}.`;
  yearBox.innerText = `${year}`;

  getDate.innerText = `${day} ${month} ${year}`;
}

setInterval(getDate(), 1000);

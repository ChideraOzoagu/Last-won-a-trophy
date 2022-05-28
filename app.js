const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const timer = document.querySelectorAll(".timer h4");

const pastDate = new Date(2017, 4, 24, 21, 45, 0);
const pastTime = pastDate.getTime();
// console.log(pastDate);

function countTimer() {
  const today = new Date().getTime();
  const countIncrease = today - pastTime;
  // calculate time in ms
  const oneYear = 52 * 7 * 24 * 60 * 60 * 1000;
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate
  let years = Math.floor(countIncrease / oneYear);
  let days = Math.floor((countIncrease % oneWeek) / oneDay);
  let hours = Math.floor((countIncrease % oneDay) / oneHour);
  let minutes = Math.floor((countIncrease % oneHour) / oneMinute);
  let seconds = Math.floor((countIncrease % oneMinute) / 1000);

  // create an array for the values
  const values = [years, days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  timer.forEach(function (time, index) {
    time.innerHTML = format(values[index]);
  });
}
let interval = setInterval(countTimer, 1000);
countTimer();

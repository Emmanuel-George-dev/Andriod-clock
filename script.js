const hourEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minutes");
const digital_hour = document.querySelector(".digital-hour");
const digital_minutes = document.querySelector(".digital-minute");
const secondsEl = document.querySelector(".seconds");
const ampm = document.querySelector(".ampm");
const dateEL = document.querySelector(".date");
const yearEL = document.querySelector(".year");
const monthEL = document.querySelector(".month");
const weekEL = document.querySelector(".week-day");

function setTime() {
  const time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let month = time.getMonth();
  let date = time.getDate();
  let day = time.getDay();
  let year = time.getFullYear();

  // calculate hour, minute, second rotation for analog clock
  const hour_rotation = hour * 30 + minutes / 2;
  const minutes_rotation = minutes * 6 + seconds / 10;
  const seconds_rotation = seconds * 6;
  hourEl.style.transform = `rotate(${hour_rotation}deg)`;
  minuteEl.style.transform = `rotate(${minutes_rotation}deg)`;
  secondsEl.style.transform = `rotate(${seconds_rotation}deg)`;

  let months = [
    "Jan,",
    "Feb,",
    "Mar,",
    "Apr,",
    "May,",
    "Jun,",
    "Jul,",
    "Aug,",
    "Sep,",
    "Oct,",
    "Nov,",
    "Dec,",
  ];
  let week = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"];

  if (hour >= 12) {
    hour = hour % 12;
    ampm.innerText = "PM";
  } else {
    ampm.innerText = "AM";
  }

  if (hour < 10) {
    digital_hour.innerText = `0${hour}`;
  } else {
    digital_hour.innerText = hour;
  }
  if (minutes < 10) {
    digital_minutes.innerText = `0${minutes}`;
  } else {
    digital_minutes.innerText = minutes;
  }
  if (hour == "00") {
    digital_hour.innerText = "12";
  }

  monthEL.innerText = months[month];
  dateEL.innerText = date;
  yearEL.innerText = year;
  weekEL.innerText = week[day];
}

setInterval(() => {
  setTime();
}, 1000);



// all of the global variables
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');
const year = document.getElementById('year');
const todaysDate = document.getElementById('date');
const today = document.getElementById('day');
const month = document.getElementById('month');



// clock function that updates the clock every second 
const clock = setInterval(function time() {

  // variables used in the function
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();
  let yr = dateToday.getFullYear();
  let date = dateToday.getDate();
  let day = dateToday.getDay();
  let mth = dateToday.getMonth();

  // if conditions for when hr, min or sec is less than 10 it will concatenate a 0 in front of the current number
  if(hr < 10){
    hr = '0' + hr;
  }
  if(min < 10){
    min = '0' + min;
  }
  if(sec < 10){
    sec = '0' + sec;
  }

  // setting the content to the updated time and date
  hour.textContent = hr;
  minute.textContent = min;
  seconds.textContent = sec;
  year.textContent = yr;
  todaysDate.textContent = date;
  today.textContent = daysOfTheWeek[day];
  month.textContent = monthsOfTheYear[mth];
}, 1000);

let darkModeOn = false;
// button function to toggle dark mode
const darkMode = document.querySelector('.theme-toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark')
  document.getElementById('day').classList.toggle('dark')
  document.getElementById('month').classList.toggle('dark')
  document.getElementById('date').classList.toggle('dark')
  document.getElementById('year').classList.toggle('dark')
  document.getElementById('hour').classList.toggle('dark')
  document.getElementById('minute').classList.toggle('dark')
  document.getElementById('seconds').classList.toggle('dark')
  document.getElementById('btn').classList.toggle('dark')

  if(darkModeOn === false) {
    document.getElementById("moon").src="../dark_mode_white.svg";
    darkModeOn = true;
  } else {
    document.getElementById("moon").src="../dark_mode_black.svg";
    darkModeOn = false;
  }
})

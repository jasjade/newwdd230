const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);

/*
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const dayname = daynames[todaysdate.getDay()];
const monthname = months[todaysdate.getMonth()];
//const year = todaysdate.getFullYear();
const currentdate = dayname + "," + todaysdate.getDate() + " " + monthName + "," + todaysdate.getFullYear();

document.getElementById('date').textContent = currentdate;
*/
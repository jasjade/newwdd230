//nav menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open"); //adds class of "open" to nal ul when clicked works like a light switch adding when clicked then unadding when its clicked again
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("fullNav").classList.toggle("open");
    document.querySelector("header").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

//date in header
// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;


//footer last modified date
document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;


//display a banner on Mondays or Tuesdays only at the very top of the page that says "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." 
/* IF/ELSE IF */

// Declare and initialize a new variable to hold the current date
const today = new Date();
const dayOfWeek = today.getDay();
// Declare a variable to hold a message that will be displayed
let message;
if (dayOfWeek >= 1 && dayOfWeek <= 2) {
    message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."; 
}
else {
    document.querySelector("#banner").classList.remove("bannerstyle");
}
/* OUTPUT */
// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#banner').textContent = message;

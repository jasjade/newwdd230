
const output = document.querySelector('#info');

//with event listener
document.getElementById("freshBtn").addEventListener("click", myFunction);

function myFunction() {
  //condition to test ? value if true : value if False
    var currentValue = localStorage.getItem('myClicks') ? parseInt(localStorage.getItem('myClicks')) : 0;
    var newValue = currentValue + 1;
    localStorage.setItem('myClicks', newValue);
    console.log('myClicks', newValue);
}







//store the URL of the JSON file as a const variable
const requestURL = 'https://jasjade.github.io/newwdd230/bountifulFoods/fruit.json';
const fruit1 = document.querySelector('#fruit1');
const fruit2 = document.querySelector('#fruit2');
const fruit3 = document.querySelector('#fruit3');

//the fetch() method requires at least one argument, the path to the resource (the URL of the JSON file)
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    //store the results of the converted response into an array 
    const fruits = jsonObject['fruits'];
    // loop through every record and process each one into its own 'card' (HTML output), one at a time. 
    
    fruits.forEach(displayfruits1);
  
    //fruits.forEach(displayfruits2);
    //fruits.forEach(displayfruits3);
  });
    

function displayfruits1(fruits) {
    // Create elements to add to the document
    let line = document.createElement('option');
    // Change the textContent property 
    line.textContent = `${fruits.name}`;
    line.setAttribute('value', fruits.name);
    // Add/append the section(card) with the option element
    fruit1.appendChild(line);
    //fruit2.appendChild(line);
  }
  

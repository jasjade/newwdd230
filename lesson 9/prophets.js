
//store the URL of the JSON file as a const variable
const requestURL = 'https://jasjade.github.io/newwdd230/chamber/data.json';
const cards = document.querySelector('.cards');

//the fetch() method requires at least one argument, the path to the resource (the URL of the JSON file)
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    //store the results of the converted response into an array 
    const prophets = jsonObject['prophets'];
    // loop through every record and process each one into its own 'card' (HTML output), one at a time. 
    prophets.forEach(displayProphets);
  });



function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p.textContent = `Date of Birth: ${prophet.birthdate}`
    p2.textContent = `Place of Birth: ${prophet.birthplace}`

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(portrait);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }


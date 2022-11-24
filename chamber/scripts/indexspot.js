
//store the URL of the JSON file as a const variable
const requestURL = 'https://jasjade.github.io/newwdd230/chamber/data.json';
const cards = document.querySelector('#cards');

async function spotLights() {
  try {
    let jsonBusinessFile = 'https://raw.githubusercontent.com/samgo23/wdd230/main/chamber/data.json';

    const response = await fetch(jsonBusinessFile);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call 

      const businesses = data['businesses'];
      businesses.forEach(spotLight);


    } else {
      throw Error(await response.text());
    };

    function spotLight(business) {
      if (business.memership_level >= 2) {
        console.log('works')
        let div = document.createElement('div');
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let contact = document.createElement('div');
        let phoneNumber = document.createElement('p');
        let address = document.createElement('p');


        // Business info
        h2.textContent = (`${business.name}`);
        phoneNumber.textContent = (`${business.phone_number}`)
        address.textContent = (`${business.address}`)

        //Buisness logo
        logo.setAttribute('src', business.imageurl);
        logo.setAttribute('alt', (`${business.name} logo`))
        logo.setAttribute('loading', 'lazy')

        // append to card
        card.appendChild(h2);
        card.appendChild(logo);
        card.appendChild(contact);
        contact.appendChild(phoneNumber);
        contact.appendChild(address);


        // append to doc
        document.querySelector('.spotlight').appendChild(card);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
spotLights();
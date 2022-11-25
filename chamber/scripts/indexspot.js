
async function spotLights() {
  try {
    let jsonBusinessFile = 'https://jasjade.github.io/newwdd230/chamber/data.json';

    const response = await fetch(jsonBusinessFile);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call 

      const companies = data['companies'];
      randomCompany = Random(companies);
      console.log(randomCompany);
      
      spotLight1(companies[randomCompany]);

      randomCompany2 = Random(companies);
      console.log(randomCompany2);

      spotLight2(companies[randomCompany2]);

      randomCompany3 = Random(companies);
      console.log(randomCompany3);

      spotLight3(companies[randomCompany3]);

    } else {
      throw Error(await response.text());
    };

    function Random(companies) {
      let levelNumber = 3;
      while (levelNumber >= 3) {
      var randomCompany = Math.floor(Math.random() * 9);
      var randomComp = companies[randomCompany];
      levelNumber = randomComp.membershipLevel;
      }
      return randomCompany;
    }

    function spotLight1(companies) {
       // Create elements to add to the document
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let p = document.createElement('p');
       // let p2 = document.createElement('p');
        let link = document.createElement('a')
      
        // Change the textContent property of the h3 element to contain the prophet's full name
        h2.textContent = `${companies.name}`;
        p.textContent = `${companies.addresses}  <br>${companies.phoneNumbers}`;
        //p2.textContent = `${companies.phoneNumbers}`;
        link.textContent = `${companies.websiteURLs}`;
        link.setAttribute('href', companies.websiteURLs);

      
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        portrait.setAttribute('src', companies.logo);
        portrait.setAttribute('alt', `${companies.name} logo`);
        portrait.setAttribute('loading', 'lazy');
      
        // Add/append the section(card) with the h2 element
        card.appendChild(portrait);
        card.appendChild(h2);
        card.appendChild(p);
        //card.appendChild(p2);
        card.appendChild(link);


        // append to doc
        document.querySelector('.spot1').appendChild(card);
    }
    function spotLight2(companies) {
      // Create elements to add to the document
       let card = document.createElement('section');
       let h2 = document.createElement('h2');
       let portrait = document.createElement('img');
       let p = document.createElement('p');
      // let p2 = document.createElement('p');
       let link = document.createElement('a')
     
       // Change the textContent property of the h3 element to contain the prophet's full name
       h2.textContent = `${companies.name}`;
       p.textContent = `${companies.addresses}  <br>${companies.phoneNumbers}`;
       //p2.textContent = `${companies.phoneNumbers}`;
       link.textContent = `${companies.websiteURLs}`;
       link.setAttribute('href', companies.websiteURLs);

     
       // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
       portrait.setAttribute('src', companies.logo);
       portrait.setAttribute('alt', `${companies.name} logo`);
       portrait.setAttribute('loading', 'lazy');
     
       // Add/append the section(card) with the h2 element
       card.appendChild(portrait);
       card.appendChild(h2);
       card.appendChild(p);
       //card.appendChild(p2);
       card.appendChild(link);


       // append to doc
       document.querySelector('.spot2').appendChild(card);
   }
   function spotLight3(companies) {
    // Create elements to add to the document
     let card = document.createElement('section');
     let h2 = document.createElement('h2');
     let portrait = document.createElement('img');
     let p = document.createElement('p');
    // let p2 = document.createElement('p');
     let link = document.createElement('a')
   
     // Change the textContent property of the h3 element to contain the prophet's full name
     h2.textContent = `${companies.name}`;
     p.textContent = `${companies.addresses}  <br>${companies.phoneNumbers}`;
     //p2.textContent = `${companies.phoneNumbers}`;
     link.textContent = `${companies.websiteURLs}`;
     link.setAttribute('href', companies.websiteURLs);

   
     // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
     portrait.setAttribute('src', companies.logo);
     portrait.setAttribute('alt', `${companies.name} logo`);
     portrait.setAttribute('loading', 'lazy');
   
     // Add/append the section(card) with the h2 element
     card.appendChild(portrait);
     card.appendChild(h2);
     card.appendChild(p);
     //card.appendChild(p2);
     card.appendChild(link);


     // append to doc
     document.querySelector('.spot3').appendChild(card);
 }
  } catch (error) {
    console.log(error);
  }
};
spotLights();
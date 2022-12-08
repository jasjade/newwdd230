
async function spotLights() {
    try {
        const requestURL = 'https://jasjade.github.io/newwdd230/bountifulFoods/fruit.json';
        const fruit1 = document.querySelector('#fruit1');
        const fruit2 = document.querySelector('#fruit2');
        const fruit3 = document.querySelector('#fruit3');
  
      const response = await fetch(requestURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call 
  
        const fruits = data['fruits'];
        //randomCompany = Random(companies);
        //console.log(randomCompany);
        
        displayfruits1(fruits);
  
        //randomCompany2 = Random(companies);
        //console.log(randomCompany2);
  
        //spotLight2(fruits);
  
        //randomCompany3 = Random(companies);
        //console.log(randomCompany3);
  
        //spotLight3(fruits);
  
      } else {
        throw Error(await response.text());
      };
  
      
      function displayfruits1(fruits) {
        // Create elements to add to the document
        let line = document.createElement('option');
        // Change the textContent property 
        line.textContent = `${fruits.name}`;
        line.setAttribute('value', fruits.name);
        // Add/append the section(card) with the option element
        fruit1.appendChild(line);
        fruit2.appendChild(line); 
      }
    
    } catch (error) {
      console.log(error);
    }
  };
  spotLights();
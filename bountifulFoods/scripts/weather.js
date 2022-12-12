// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');

const iconDay1 = document.querySelector('#iconDay1');
const tempDay1 = document.querySelector('#tempDay1');
const capDay1 = document.querySelector('#capDay1');

const iconDay2 = document.querySelector('#iconDay2');
const tempDay2 = document.querySelector('#tempDay2');
const capDay2 = document.querySelector('#capDay2');

const iconDay3 = document.querySelector('#iconDay3');
const tempDay3 = document.querySelector('#tempDay3');
const capDay3 = document.querySelector('#capDay3');


const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=117.35&units=imperial&cnt=4&appid=76ced6989e022cffdb22580832175a30'
//lat=33.15&lon=117.35

async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            console.log(`Response not OK ${await response.text()}`);
        }
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

apiFetch()

//captialize
function captialize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}


// display the results 
function displayResults(data) {
    currentTemp.textContent = data.list[0].main.temp;
    let desc = captialize(data.list[0].weather[0].description)
    captionDesc.textContent = desc;
    //captionDesc.textContent = `Icon of current weather condition at Fairbanks which is ${desc}`;
    weatherIcon.src = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    weatherIcon.alt = `Icon of current weather conditions at Fairbanks which is ${desc}`;
    humidity.textContent = data.list[0].main.humidity;

    tempDay1.textContent = data.list[1].main.temp;
    iconDay1.src = `http://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
    let desc1 = captialize(data.list[1].weather[0].description)
    capDay1.textContent = desc1;

    tempDay2.textContent = data.list[2].main.temp;
    iconDay2.src = `http://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`;
    let desc2 = captialize(data.list[2].weather[0].description)
    capDay2.textContent = desc2;

    tempDay3.textContent = data.list[3].main.temp;
    iconDay3.src = `http://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`;
    let desc3 = captialize(data.list[3].weather[0].description)
    capDay3.textContent = desc3;


}


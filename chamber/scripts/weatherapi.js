// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=64.84&lon=147.72&units=imperial&appid=76ced6989e022cffdb22580832175a30'


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
    currentTemp.textContent = data.main.temp;
    let desc = captialize(data.weather[0].description)
    captionDesc.textContent = desc;
    captionDesc.textContent = `Icon of current weather condition at Fairbanks which is ${desc}`;
    weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.alt = `Icon of current weather conditions at Fairbanks which is ${desc}`;
}


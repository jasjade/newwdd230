// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windChill = document.querySelector('#windChill');
const windSpeed = document.querySelector('#windSpeed');

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=36.04&lon=84.34&units=imperial&appid=76ced6989e022cffdb22580832175a30'


async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
            wind(data);
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

//wind
function wind(data) {
    const t = data.main.temp;
    const s = data.wind.speed;

    wchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    return wchill;
}
// display the results 
function displayResults(data) {
    currentTemp.textContent = data.main.temp;
    let desc = captialize(data.weather[0].description)
    captionDesc.textContent = desc;
    //captionDesc.textContent = `Icon of current weather condition at Fairbanks which is ${desc}`;
    weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.alt = `Icon of current weather conditions at Fairbanks which is ${desc}`;
    windSpeed.textContent = data.wind.speed;
    windChill.textContent = Math.round(wind(data) * 100) / 100;
}


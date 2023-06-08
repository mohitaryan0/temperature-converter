// script.js
const resultElem = document.querySelector("#result");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const fromUnit = document.querySelector("#from-unit");
const toUnit = document.querySelector("#to-unit");

window.addEventListener("load", () => {
  degree.value = "";
  resultElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertTemperature();
});

function convertTemperature() {
  let inputValue = parseFloat(degree.value);

  const fromTemperature = fromUnit.value;
  const toTemperature = toUnit.value;
  let convertedValue;

  if (fromTemperature === "celsius") {
    if (toTemperature === "fahrenheit") {
      convertedValue = (inputValue * 9 / 5) + 32;
    } else if (toTemperature === "kelvin") {
      convertedValue = inputValue + 273.15;
    } else {
      convertedValue = inputValue; // No conversion needed
    }
  } else if (fromTemperature === "fahrenheit") {
    if (toTemperature === "celsius") {
      convertedValue = (inputValue - 32) * 5 / 9;
    } else if (toTemperature === "kelvin") {
      convertedValue = (inputValue - 32) * 5 / 9 + 273.15;
    } else {
      convertedValue = inputValue; // No conversion needed
    }
  } else if (fromTemperature === "kelvin") {
    if (toTemperature === "celsius") {
      convertedValue = inputValue - 273.15;
    } else if (toTemperature === "fahrenheit") {
      convertedValue = (inputValue - 273.15) * 9 / 5 + 32;
    } else {
      convertedValue = inputValue; // No conversion needed
    }
  } else {
    convertedValue = inputValue; // No conversion needed
  }

  resultElem.innerHTML = `${convertedValue.toFixed(3)} ${toTemperature}`;
}

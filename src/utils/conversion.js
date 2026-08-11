const ABSOLUTE_ZERO_C = -273.15;
const ABSOLUTE_ZERO_F = -459.67;
const ABSOLUTE_ZERO_K = 0;

export function convertTemperature(value, from, to) {

  if (value === "" || value === null || value === undefined) {
    throw new Error("Please enter a temperature.");
  }

  const temperature = Number(value);

  if (!Number.isFinite(temperature)) {
    throw new Error("Please enter a valid number.");
  }

  const validUnits = ["Celsius", "Fahrenheit", "Kelvin"];

  if (!validUnits.includes(from) || !validUnits.includes(to)) {
    throw new Error("Invalid temperature unit.");
  }


  if (
    (from === "Celsius" && temperature < ABSOLUTE_ZERO_C) ||
    (from === "Fahrenheit" && temperature < ABSOLUTE_ZERO_F) ||
    (from === "Kelvin" && temperature < ABSOLUTE_ZERO_K)
  ) {
    throw new Error("Temperature cannot be below absolute zero.");
  }

  
  let celsius;

  if (from === "Celsius") {
    celsius = temperature;
  } else if (from === "Fahrenheit") {
    celsius = (temperature - 32) * 5 / 9;
  } else {
    celsius = temperature - 273.15;
  }
  
  if (to === "Celsius") {
    return celsius;
  } else if (to === "Fahrenheit") {
    return (celsius * 9 / 5) + 32;
  } else {
    return celsius + 273.15;
  }
}
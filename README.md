# Temperature Converter

A simple and responsive web application designed to convert temperatures between **Celsius, Fahrenheit, and Kelvin**. The application provides accurate conversions, input validation, and a clean user-friendly interface.


## Features

* Convert temperatures between Celsius, Fahrenheit, and Kelvin
* Supports all temperature conversion combinations
* Validates empty and invalid inputs
* Prevents temperatures below absolute zero
* Displays results with appropriate unit symbols
* Reset functionality
* Clean and responsive user interface

## Technologies Used

* **React** – User interface development
* **Vite** – Development and build tool
* **JavaScript** – Application and conversion logic
* **CSS** – Styling
* **ESLint** – Code quality and static analysis

## Project Structure

```text
temperature-converter/
│
├── src/
│   ├── components/
│   │   └── TemperatureConverter.jsx
│   ├── utils/
│   │   └── conversion.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

## How It Works

The application collects the temperature value and selected units from the user. The input is validated before conversion.

The conversion logic is kept separate from the user interface in `conversion.js`. The input temperature is first converted to **Celsius** when necessary and then converted to the selected target unit.

The application also validates temperatures against absolute zero:

| Unit       | Minimum Valid Temperature |
| ---------- | ------------------------: |
| Celsius    |                -273.15 °C |
| Fahrenheit |                -459.67 °F |
| Kelvin     |                       0 K |

## Conversion Formulas

* **Celsius to Fahrenheit:** `(C × 9/5) + 32`
* **Celsius to Kelvin:** `C + 273.15`
* **Fahrenheit to Celsius:** `(F − 32) × 5/9`
* **Kelvin to Celsius:** `K − 273.15`

Other conversions are performed using Celsius as an intermediate unit.

## Installation and Usage

Clone the repository:
git clone <repository-url>

Navigate to the project folder:
cd temperature-converter

Install dependencies:
npm install

Start the development server:
npm run dev

Open the local URL displayed in the terminal, typically:
http://localhost:5173

## Code Quality and Build

Run ESLint:
npm run lint

Create a production build:
npm run build

## Validation

The application handles:

* Empty input
* Invalid or non-numeric values
* Invalid temperature units
* Temperatures below absolute zero
* Decimal values
* Same-unit conversions

## Learning Outcomes

This project demonstrates:

* React component development
* State management using `useState`
* Event handling
* Input validation and error handling
* Separation of UI and business logic
* Temperature conversion algorithms
* Basic code quality practices using ESLint


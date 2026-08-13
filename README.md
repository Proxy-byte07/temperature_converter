Temperature Converter
Project Overview

Temperature Converter is a web-based application designed to convert temperature values between Celsius, Fahrenheit, and Kelvin scales. The application provides a simple and interactive interface where users can enter a temperature, select the input and output units, and instantly obtain the converted value. The application also validates user input to ensure that only valid numerical temperatures are processed.

Features

The application allows users to select Celsius, Fahrenheit, or Kelvin as the input and output temperature scales. It performs accurate temperature conversions based on the selected units and displays the converted result clearly. The application includes input validation to handle empty, non-numeric, and invalid values appropriately. It also provides a simple interface that allows users to perform multiple conversions without reloading the application.

Technologies Used

The project is developed using React and JavaScript for the application logic and user interface. Vite is used as the development and build tool, while CSS is used to create a clean and responsive interface. ESLint is used to maintain code quality and identify potential issues during development.

Project Structure

The application follows a component-based structure that separates the user interface from the temperature conversion logic. TemperatureConverter.jsx manages the user interface, user input, temperature selections, and display of conversion results. The conversion.js file contains the core conversion logic and validation functions for Celsius, Fahrenheit, and Kelvin. App.jsx manages the main application structure and connects the temperature converter component to the application.

Conversion Logic

The application uses standard mathematical formulas to convert temperatures between the three supported scales. Celsius to Fahrenheit is calculated using (C × 9/5) + 32, while Fahrenheit to Celsius uses (F − 32) × 5/9. Celsius to Kelvin is calculated using C + 273.15, and Kelvin to Celsius uses K − 273.15. Fahrenheit to Kelvin and Kelvin to Fahrenheit conversions are performed using the corresponding standard conversion formulas. The application automatically selects the appropriate formula based on the input and output units selected by the user.

Validation

The application performs input validation before carrying out a conversion. It checks whether the input field is empty or contains a non-numeric value and displays an appropriate validation message when invalid data is entered. The application also prevents physically invalid temperature values, such as temperatures below absolute zero. This ensures that the conversion results remain meaningful and accurate.

Testing

The application was tested using different combinations of Celsius, Fahrenheit, and Kelvin conversions to verify the accuracy of the conversion formulas. Input validation was tested using empty fields, non-numeric characters, and invalid temperature values below absolute zero. The application was also tested with decimal values and repeated conversions between different temperature scales to ensure consistent results.

Installation and Usage

To run the project locally, clone the repository and navigate to the project directory. Install the required dependencies using npm install and start the development server using npm run dev. The application can then be accessed through the local URL provided by Vite, typically http://localhost:5173.

For production verification, the project can be checked using npm run lint and built using npm run build. The production build can also be previewed using npm run preview.

Live Demo

Visit the website for the live demo: https://proxy-byte07.github.io/temperature_converter/
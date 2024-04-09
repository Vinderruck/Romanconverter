const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const display = document.getElementById("output");

const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function convert() {
  // Input validation
  if (input.value === "") {
    display.innerText = "Please enter a valid number.";
    return; // Exit the function early if input is empty
  }

  const number = parseInt(input.value);

  // Range validation
  if (number < 1) {
    display.innerText = "Please enter a number greater than or equal to 1.";
    return; // Exit the function early if number is less than 1
  } else if (number > 3999) {
    display.innerText = "Please enter a number less than or equal to 3999.";
    return; // Exit the function early if number is greater than 3999
  }

  const convertedNumber = convertToRoman(number);
  display.innerText = convertedNumber; // Display the converted Roman numeral
}

function convertToRoman(number) {
  let romanNumeral = ""; // Initialize empty string for the converted numeral
  
  for (const key in roman) {
    while(number >= roman[key]){
        romanNumeral += key;
        number -= roman[key];

       console.log(number) 
    //console.log(roman[key])
    }
  }
return romanNumeral
}

button.addEventListener("click", convert);

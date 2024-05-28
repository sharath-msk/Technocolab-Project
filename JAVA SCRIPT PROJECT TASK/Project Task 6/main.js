const prompt = require('prompt-sync')();
const kelvin = Number(prompt("Enter the temperature value(in Kelvin ): "))

//The belo code sonverts the Kelvin to degree celsius

let celsius = kelvin-273 ;


let fahrenheit = celsius*(9/5)+32 ;

//The below line rounded the fahrenheit decimal value.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


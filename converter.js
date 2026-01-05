import Celsius from "./celcius.js";
import Reamur from "./reamur.js";
import Kelvin from "./kelvin.js";
import Fahrenheit from "./fahrenheit.js";

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    console.log("kalkulator suhu");
    console.log("pilih pilihan suhu berikut:");
    console.log("1. Celsius");
    console.log("2. Reamur");
    console.log("3. Kelvin");
    console.log("4. Fahrenheit");
    
    rl.question("masukkan angka saja, 1 untuk kelvin, 2 untuk reamur dst... (1-4): ", (scaleChoice) => {
        rl.question("masukkan besaran temperatur: ", (temp) => {
        
            const temperature = parseFloat(temp);
            
            switch (scaleChoice) {
                case '1': 
                    Celsius.set(temperature);
                    console.log(`${Celsius.value}°C = ${Celsius.toReamur()}°R`);
                    console.log(`${Celsius.value}°C = ${Celsius.toKelvin()}K`);
                    console.log(`${Celsius.value}°C = ${Celsius.toFahrenheit()}°F`);
                    break;
                case '2': 
                    Reamur.set(temperature);
                    console.log(`${Reamur.value}°R = ${Reamur.toCelsius()}°C`);
                    console.log(`${Reamur.value}°R = ${Reamur.toKelvin()}K`);
                    console.log(`${Reamur.value}°R = ${Reamur.toFahrenheit()}°F`);
                    break;
                case '3': 
                    Kelvin.set(temperature);
                    console.log(`${Kelvin.value}K = ${Kelvin.toCelsius()}°C`);
                    console.log(`${Kelvin.value}K = ${Kelvin.toReamur()}°R`);
                    console.log(`${Kelvin.value}K = ${Kelvin.toFahrenheit()}°F`);
                    break;
                case '4': 
                    Fahrenheit.set(temperature);
                    console.log(`${Fahrenheit.value}°F = ${Fahrenheit.toCelsius()}°C`);
                    console.log(`${Fahrenheit.value}°F = ${Fahrenheit.toReamur()}°R`);
                    console.log(`${Fahrenheit.value}°F = ${Fahrenheit.toKelvin()}K`);
                    break;
                default:
                    console.log("Pilih rentang 1 sampai 4.");
                    break;
            }
            rl.close(); 
        });
    });
}

main();
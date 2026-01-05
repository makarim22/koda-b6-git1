import Celsius from "./celcius.js";
import Reamur from "./reamur.js";
import Kelvin from "./kelvin.js";
import Fahrenheit from "./fahrenheit.js";

function main(temp){
    Celsius.set(temp);
    console.log(Celsius.toReamur(), Celsius.toKelvin(), Celsius.toFahrenheit());

    Reamur.set(temp);
    console.log(Reamur.toCelsius(), Reamur.toKelvin(), Reamur.toFahrenheit());

    Kelvin.set(temp);
    console.log(Kelvin.toCelsius(), Kelvin.toReamur(), Kelvin.toFahrenheit());


   Fahrenheit.set(temp);
   console.log(Fahrenheit.toCelsius(), Fahrenheit.toReamur(), Fahrenheit.toKelvin());
}

main(100);
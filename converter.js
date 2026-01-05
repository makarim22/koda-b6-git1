import Celsius from "./celcius.js";
import Reamur from "./reamur.js";

function main(temp){
    Celsius.set(temp);
    console.log(Celsius.toReamur(), Celsius.toKelvin(), Celsius.toFahrenheit());

    Reamur.set(temp);
    console.log(Reamur.toCelsius(), Reamur.toKelvin(), Reamur.toFahrenheit());
}

main(100);
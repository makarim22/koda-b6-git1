import Celsius from "./celcius.js";

function main(temp){
    Celsius.set(temp);
    console.log(Celsius.toReamur(), Celsius.toKelvin(), Celsius.toFahrenheit());
}

main(100);
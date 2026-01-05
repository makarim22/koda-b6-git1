const Kelvin = {
    value: 0, // Default value

    set(value) {
        this.value = value;
    },

    toCelsius() {
        return this.value - 273.15;
    },

    toReamur() {
        return (this.toCelsius() * 4 / 5);
    },

    toFahrenheit() {
        return (this.value - 273.15) * 9 / 5 + 32;
    }
};

export default Kelvin;
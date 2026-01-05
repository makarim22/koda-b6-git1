const Fahrenheit = {
    value: 0, // Default value

    set(value) {
        this.value = value;
    },

    toCelsius() {
        return (this.value - 32) * 5 / 9;
    },

    toReamur() {
        return (this.toCelsius() * 4 / 9);
    },

    toKelvin() {
        return (this.value - 32) * 5 / 9 + 273.15;
    }
};

export default Fahrenheit;
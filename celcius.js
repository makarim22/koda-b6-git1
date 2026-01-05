const Celsius = {
    value: 0, 

    set(value) {
        this.value = value;
    },

    toReamur() {
        return this.value * 4 / 5;
    },

    toKelvin() {
        return this.value + 273.15;
    },

    toFahrenheit() {
        return (this.value * 9 / 5) + 32;
    }
};

export default Celsius;
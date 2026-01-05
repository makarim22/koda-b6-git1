
const Reamur = {
    value: 0, 

    set(value) {
        this.value = value;
    },

    toCelsius() {
        return this.value * 5 / 4;
    },

    toKelvin() {
        return (this.toCelsius() + 273.15);
    },

    toFahrenheit() {
        return (this.value * 9 / 4) + 32;
    }
};

export default Reamur;
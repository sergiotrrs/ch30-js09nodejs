
const sum = (a,b) => {
    // return (a *100_000  +  b * 100_000)/100_000;
    return Number((a + b ).toFixed(4));
};

const suma2 = (a,b) => {
    return a + b;
}

module.exports = { sum, suma2 };


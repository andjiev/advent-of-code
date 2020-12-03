const data = require('./data');

const numbers = data.split('\n').map(x => parseInt(x));
const sum = 2020;
const map = {};

for (let i = 0; i < numbers.length; i++) {
    const element = map[sum - numbers[i]];
    if (element) {
        console.log(element * numbers[i]);
        return;
    }

    map[numbers[i]] = numbers[i];
}
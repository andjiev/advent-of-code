const data = require('./data');

const lines = data.split('\n');
const length = lines[0].length;
const rules = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
let total = 1;

rules.forEach(rule => {
    let count = 0;
    let start = 0;

    lines.filter((_, index) => index % rule[1] == 0).forEach(line => {
        if (start > length - 1) {
            start = start - length;
        }

        if (line.charAt(start) == '#') {
            count++;
        }
        start += rule[0];
    });
    total *= count;
});

console.log(total);

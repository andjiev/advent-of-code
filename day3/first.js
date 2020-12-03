const data = require('./data');

const lines = data.split('\n');
const length = lines[0].length;
let start = 0;
let total = 0;

lines.forEach(line => {
    if (start > length - 1) {
        start = start - length;
    }

    if (line.charAt(start) == '#') {
        total++;
    }
    start += 3;
});

console.log(total);

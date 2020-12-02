const data = require('./data');

const lines = data.split('\n');
let total = 0;

lines.forEach(line => {
    const lineParts = line.split(new RegExp('\\s+'));
    const i = parseInt(lineParts[0].split('-')[0]) - 1;
    const j = parseInt(lineParts[0].split('-')[1]) - 1;
    const letter = lineParts[1].charAt(0);
    const text = lineParts[2];

    if ((text[i] === letter && text[j] !== letter) ||
        (text[i] !== letter && text[j] === letter)) {
        total++;
    }
});

console.log(total);


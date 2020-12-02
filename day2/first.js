const data = require('./data');

const lines = data.split('\n');
let total = 0;

lines.forEach(line => {
    const lineParts = line.split(new RegExp('\\s+'));
    const min = parseInt(lineParts[0].split('-')[0]);
    const max = parseInt(lineParts[0].split('-')[1]);
    const letter = lineParts[1].charAt(0);
    const text = lineParts[2];
    const occurrences = text.match(new RegExp(letter, 'g')) || [];

    if (occurrences.length >= min && occurrences.length <= max) {
        total++;
    }
});

console.log(total);


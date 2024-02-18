const prompt = require('prompt');

prompt.start();

prompt.get(['luku1', 'luku2'], (err, result) => {
    const luku1 = parseFloat(result.luku1);
    const luku2 = parseFloat(result.luku2);

    const suurempiLuku = Math.max(luku1, luku2);
    console.log(`Suurempi luku on: ${suurempiLuku}`);
});
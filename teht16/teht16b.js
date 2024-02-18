const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Anna sana: ', function(sana) {
  const takaperin = sana.split('').reverse().join('');

  if (sana === takaperin) {
    console.log(`${sana} on palindromi.`);
  } else {
    console.log(`${sana} ei ole palindromi.`);
  }

  rl.close();
});

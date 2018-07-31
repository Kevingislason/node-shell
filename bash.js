process.stdout.write('prompt >');
const pwd = require('./pwd');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(!pwd(cmd)){
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
})

process.stdout.write('prompt >');
const pwd = require('./pwd');
const ls = require('./ls');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (!pwd(cmd) && !ls(cmd)) {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});

process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  switch (cmd) {
    case 'pwd':
      pwd(cmd);
      break;
    case 'ls':
      ls(cmd);
      break;
    default:
      process.stdout.write('\nprompt > ');
      break;
  }
});

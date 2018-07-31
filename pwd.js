module.exports = function(cmd) {
  if (cmd === 'pwd') {
    process.stdout.write(__dirname);
    process.stdout.write('\nprompt > ');
    return true;
  }
  return false;
};

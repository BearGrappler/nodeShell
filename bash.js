
var commands = require('./command')

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmdArray = data.toString().trim().split(' ');
  //remove the newline with trim at the end
  //being able to handle an arbitrary number of arguments
  // vs. var cmd = data.toString().trim();
  var cmd = cmdArray[0];
  console.log(process.argv);
  console.log('\n' + 'What we care about is below ' + '\n');
  if(commands[cmd] === undefined){
    process.stdout.write('Undefined Command!' + '\n' + 'prompt > ');
  }
  else{
    commands[cmd](cmdArray.slice(1));
  }

});


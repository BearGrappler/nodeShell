var fs = require('fs');

 module.exports = {

    date: function(){
//console.log() vs process.stdout.write; CL adds new line
      process.stdout.write(Date() + '\nprompt > ');
    },

    pwd: function(){
        console.log(process.argv[1].slice(0, process.argv[1].lastIndexOf('/'  )));
        process.stdout.write('prompt > ');
  },
    ls: function(){

        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file){
            process.stdout.write(file.toString() +"\n");
            })
          process.stdout.write("prompt > ");
        }
      )

  },

  echo: function(argumentsArray){
    console.log( argumentsArray.join(' '));

    //if we do not have process.stdout then it won't reiterate the prompt
    process.stdout.write('prompt > ');

  },

  cat: function(argumentsArray){
    // var option = argumentsArray[0];
    var fileName = argumentsArray[0];
    console.log(fileName);
    var encoding = 'utf8';
    fs.readFile(fileName, encoding, function(err, data){
      if (err) throw err;
      process.stdout.write(data + "\nprompt > ");
    })
  },

  //data comes in as a buffer and you can conver it to a string


  head: function(argumentsArray){
    var fileName = argumentsArray[0];
    console.log(fileName);
    var encoding = 'utf8';
    var buffer = fs.readFile(fileName, encoding, function(err, data){
      if (err) throw err;
      return data;
    })
    buffer = buffer.toString();
    console.log(buffer);


  }
};

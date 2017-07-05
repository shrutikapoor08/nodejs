var fs = require('fs');

//Reading File Sync
var file = process.argv[2];
//var lines = fs.readFileSync(file).toString().split('\n') -1;
//console.log(lines);

//Reading File Sync


fs.readFile(file, function(err, data){
  if(err){
    console.log(err);
    return;
  }
  var lines = data.toString().split('\n').length -1;
  console.log(lines);
});

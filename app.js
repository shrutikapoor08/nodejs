var fs = require('fs');

//Reading File Sync
//var file = process.argv[2];
//var lines = fs.readFileSync(file).toString().split('\n') -1;
//console.log(lines);

//Reading File ASync
//
// fs.readFile(file, function(err, data){
//   if(err){
//     console.log(err);
//     return;
//   }
//   var lines = data.toString().split('\n').length -1;
//   console.log(lines);
// });
//

//Filtetered LS
var path = process.argv[2];
var extension = process.argv[3];
fs.readdir(path, function(err,files){
  if(err) return console.log(err);
  var filesWithPath = files.map((file) => {
    if(file.split('.')[1] === extension ) console.log(file);
  });
})

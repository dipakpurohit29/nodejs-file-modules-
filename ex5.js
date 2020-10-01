var fs = require('fs');
fs.readFile('./data.txt','utf-8',function(err,data){
    if(err) return err

else {
console.log(data);
console.log("from readfile");
} });
console.log("after calling readfile");  // in asynchronus first read lastline and after that read a file


//     // synchronous read file  
//    var fs = require('fs');
//  const data = fs.readFileSync('./data.txt','utf-8');
//  console.log(data);
//  console.log("after file sync");


      //  writing file fs.writeFile(filename, data,optional,callback)
//       // if file already exists then it overwrites content otherwise it createa new file  and writes the data into it .

// fs.writeFile('./data.txt',"its new info",function(err,data){
//     if(err) return err
//     else {
//         console.log("write opration completed");
//     }
// });




   //   append thih file 

// fs.appendFile('./data.txt'," \n appending file with new ",function(err,data){
//     if(err) return err
//     else {
//         console.log("append opration completed");
//     }
// });



//   delete the file 
// fs.writeFile('./d.txt',"new ",function(err,data){
//     console.log("created")
// });
// fs.unlink('./d.txt',function(err,data){
//     console.log("deleted file");
// });




// renaming file 


// fs.rename('./oldname.txt','./newfile1.txt',function(err,data){

//     console.log("renameing file successfully");
// });
 



// number of words count 
    fs.readFile('newfile.txt',function(err,data){
        if(err){
            console.log(err);
        }
        var array = data.toString().split(" ");
        var l = array.length;
        console.log("total number of the words " + l);
    });






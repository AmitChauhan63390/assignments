const fs = require("fs");

fs.readFile('a.txt','utf-8',(err,data)=>{
    console.log(data);
    console.log(err);
})

for(let i=0;i<10;i++){
    console.log(i);
}
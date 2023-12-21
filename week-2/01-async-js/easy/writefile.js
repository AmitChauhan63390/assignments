const fs = require('fs');

const content = "hello i am writing something";

fs.writeFile('b.txt',content,'utf-8',(err)=>{
    console.log(err);
    console.log("everything has been written");

})

for(let i=0;i<10;i++){
    console.log(i);
}


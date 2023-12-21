const fs = require("fs")
fs.readFile("a.txt",'utf-8',(err,data)=>{
    let str = data;
    let modifiedStr = str.split(' ').filter(word => word !== '').join(' ');
    writeback(modifiedStr);
})

function writeback(data){
    fs.writeFile("a.txt",data,'utf-8',function(){
        console.log("done writing back!!")
    })
}
let counter = 0;

const interval=setInterval(()=>{
    console.log(counter);
    counter++;
    if(counter>10000000000){
        clearInterval(interval)
    }

},1000)
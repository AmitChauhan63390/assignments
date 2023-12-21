let counter = 0;
function incrementcounter(){
    console.log(counter);
    counter++;
    if(counter<10000000000000){
        setTimeout(incrementcounter,1000);
    }

}

incrementcounter();
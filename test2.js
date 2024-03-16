i=0
function test(){
    console.log("testing")
    i++
    if(i>10){
        console.log("ended")
    }else{
        test()
    }
    
}

test()
let A=()=>{
    return new Promise((res,rej)=>{

        setTimeout(() => {
            console.log("hellow")
            res()
        }, 2000);

    })
}
let B=()=>{
    return new Promise((res,rej)=>{

        setTimeout(() => {
            console.log("hellow I am B")
            res()
        }, 1000);

    })
}

A()
.then(()=>{
   return B()
})





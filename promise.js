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
            rej("error in B")
        }, 1000);

    })
}


let C=()=>{
    return new Promise((res,rej)=>{

        setTimeout(() => {
            console.log("hellow I am C")
            res()
        }, 1000);

    })
}

A()
.then(()=>{
   return B()
})
.then(()=>{
    return C()
})
.catch((err)=>{
    console.log(err)
})





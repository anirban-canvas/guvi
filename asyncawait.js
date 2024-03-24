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

async function main(){
    try{
        await A()
        await B()
        await C()

    }catch(err){
        console.log(err)
    }
  
}
main()

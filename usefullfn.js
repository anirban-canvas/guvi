export default function printfname(name){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(name) 
            resolve()
         },2000)
    })
   
}
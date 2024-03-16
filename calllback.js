console.log("hellow")

const myPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("print after 3 sec")
            resolve("1st Prmose")
        },3000)

    })
}
const my2ndPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("print after 1 sec")
            resolve('2nd Prmose')
        },1000)

    })
}


Promise.all([myPromise(),my2ndPromise()])
.then((values)=>{
    console.log(values)
    console.log("all done")
})





// myPromise().then(()=>{
//     console.log("promise Done")
//     return my2ndPromise()
// })
// .then(()=>{
//     console.log("all done")
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("all ended")
// })






// setTimeout(()=>{
//     console.log("print after 3 sec")
//     setTimeout(()=>{
//         console.log("print after printing this first one after one sec")

//     },1000)
// },3000)





let A=(params)=>{
    return new Promise((res,rej)=>{

        setTimeout(() => {
           
            res(params*2)
        }, 2000);

    })
}
let B=(params)=>{
    return new Promise((res,rej)=>{

        setTimeout(() => {
            console.log("hellow I am B")
            res(params*3)
        }, 1000);

    })
}

let C=(p1,p2)=>{
    return p1+p2
}


Promise.all([A(2),B(3)])
.then((rs)=>{
    var result=C(rs[0],rs[1])
    console.log(result)
})

// var s1=A(2)
// var s2=B(3)
// var rs=C(s1,s2)
// console.log(rs)

//A=2 B=3 4+9=13








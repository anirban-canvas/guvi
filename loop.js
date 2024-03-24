import printfname from "./usefullfn.js";

async function main(){
let data=[
    {
      "id": "2",
      "fname": "dummy titile new",
      "lname": "testlname 2",
      "class": "V",
      "total": 4000
    },
    {
      "id": "3",
      "fname": "dummy titile new",
      "lname": "testlname 2",
      "class": "V",
      "total": 4000
    },
    {
      "id": "4",
      "fname": "dummy titile new 12",
      "lname": "testlname 2",
      "class": "V",
      "total": 4000
    }]



for(let dt of data){
  
     await printfname(dt.fname)

}
}
main()


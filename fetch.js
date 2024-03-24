function search(){
    fetchcountry(document.getElementById('search-name').value)
// fetch('https://restcountries.com/v3.1/name/'+document.getElementById('search-name').value)
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res)
//     document.getElementById('name').textContent=res[0].name.common
//     document.getElementById('offitial-name').textContent=res[0].name.official
//     document.getElementById('population').textContent=res[0].population
// })
}
async function fetchcountry(name){
   try{
    let response=await fetch('https://restcountries.com/v3.1/name/'+name)
    let responseJson=await response.json()
   
    document.getElementById('name').textContent=responseJson[0].name.common
    document.getElementById('offitial-name').textContent=responseJson[0].name.official
    document.getElementById('population').textContent=responseJson[0].population
    document.getElementById('error').textContent=""
   }catch(err){
    console.log("Internal server error")
    document.getElementById('error').textContent="Site is down , Please try after sometime"
   }
}
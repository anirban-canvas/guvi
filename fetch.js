function search(){
fetch('https://restcountries.com/v3.1/name/'+document.getElementById('search-name').value)
.then((res)=>{
    return res.json()
})
.then((res)=>{
    console.log(res)
    document.getElementById('name').textContent=res[0].name.common
    document.getElementById('offitial-name').textContent=res[0].name.official
    document.getElementById('population').textContent=res[0].population
})
}
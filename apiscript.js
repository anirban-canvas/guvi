async function saveData(){

    await fetch('http://localhost:3300/students/',{
        method:'POST',
        body:JSON.stringify(
            {
                "fname": document.getElementById('fname').value,
                "lname": document.getElementById('lname').value,
                "class": document.getElementById('class').value,
                "total": document.getElementById('total').value
            }
        )
    })

   document.getElementById('status').textContent="Data created successfully"
   clearData()
   getData()


}
async function updateRecord(id){

    let data=await fetch('http://localhost:3300/students/'+id)
    let datajson=await data.json()
    console.log(datajson)
    document.getElementById('fname').value=datajson.fname
    document.getElementById('lname').value=datajson.lname
    document.getElementById('class').value=datajson.class
    document.getElementById('total').value=datajson.total

}






async function updateRecordDB(id){

    await fetch('http://localhost:3300/students/'+id,{
        method:'PUT',
        body:JSON.stringify(
            {
                "fname": document.getElementById('fname').value,
                "lname": document.getElementById('lname').value,
                "class": document.getElementById('class').value,
                "total": document.getElementById('total').value
            }
        )
    })

   document.getElementById('status').textContent="Data created successfully"
   clearData()
   getData()


}



async function getData(){

    let data=await fetch('http://localhost:3300/students')
    let jsondata=await data.json();
    let datadoc=document.getElementById('data')
    datadoc.innerHTML="";
    for(dt of jsondata){
        datadoc.innerHTML+=` <div class="row">
        <div class="data-item">
            ${dt.id}
        </div>
        <div class="data-item">
            ${dt.fname}
        </div>
        <div class="data-item">
        ${dt.class}
        </div>
        <div class="data-item">
        ${dt.total}
        </div>
        <div class="data-item">
        <button onclick="updateRecord('${dt.id}')">Edit </button> <button onclick="deleteRecord('${dt.id}')">Delete </button>
        </div>
    </div>`
    }




}

async function deleteRecord(id){
    let con=confirm("Are you sure?")
    if(con){
        await fetch('http://localhost:3300/students/'+id,{
        method:'DELETE'
       
    })
    alert("deleted");
    getData();
    }
    
}


function clearData(){
    document.getElementById('fname').value=""
    document.getElementById('lname').value=""
    document.getElementById('class').value=""
    document.getElementById('total').value=""
}




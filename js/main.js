var name;
var names =[];
var names2;
var userTR = document.getElementById("nameTR");

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    Create();
    Read();
    document.getElementById("form").reset();
});

function Create(){
    let storage = JSON.parse(localStorage.getItem("names"));
    name=document.getElementById("name").value;
    if(name==''){
        alert("Write the name");
    }else{
        if (storage==null){
            names.push(name);
            localStorage.setItem("names", JSON.stringify(names));
        }else{
            names=JSON.parse(localStorage.getItem("names"));
            names.push(name);
            localStorage.setItem("names",JSON.stringify(names));
        }
    }
}

function Read(){
    userTR.innerHTML = '';
    names2=JSON.parse(localStorage.getItem("names"));
    if(names2!=null){
        for(var i =0;i<names2.length;i++){
            userTR.innerHTML+=`
            <div class="bg-dark border border-success text-white card mb-2">
                <div class="card-body">
                    <p><i class="fas fa-user"></i>User : ${names2[i]}</p>
                    <button class="col-5 text-white btn btn-warning" onclick="Update(${i})"><i class="fas fa-edit"></i> Edit</button>
                    <button class="col-5 text-white btn btn-danger" onclick="Delete(${i})"><i class="fas fa-trash-alt"></i> Delete</button>
                </div>
            </div>
            `
        }
    }
}

function Update(i3){
    let names4=JSON.parse(localStorage.getItem("names"));

    userTR.innerHTML='';
    for(var i=0;i<names4.length;i++){
        if(i==i3){
            userTR.innerHTML=`
            <div class="bg-dark border border-danger text-white card mb-2">
                <div class="card-body">
                    <p><i class="fas fa-user"></i>User:</p>
                    <input class="mb-2 form-control" id="newName" placholder="${names4[i]}">
                    <button class="col-5 text-white btn btn-success" onclick="Update2(${i})"><i class="fas fa-edit"></i> Update</button>
                    <button class="col-5 text-white btn btn-danger" onclick="Read()"><i class="fas fa-ban-alt"></i> Cancel</button>
                </div>
            </div>
            `
        }else{
            userTR.innerHTML+=`
            <div class="bg-dark border border-success text-white card mb-2">
                <div class="card-body">
                    <p><i class="fas fa-user"></i>User : ${names2[i]}</p>
                    <button disabled class="col-5 text-white btn btn-warning" onclick="Update(${i})"><i class="fas fa-edit"></i> Edit</button>
                    <button disabled class="col-5 text-white btn btn-danger" onclick="Delete(${i})"><i class="fas fa-trash-alt"></i> Delete</button>
                </div>
            </div>
            `
        }
    }
}

function Update2(i){
    let names5 = JSON.parse(localStorage.getItem("names"));
    names5[i].document.getElementById("newName").value;

    if(names5[i]==''){
        alert("WRITE THE NAME");
    }else{
        localStorage.setItem("names",JSON.stringify(names5));
        Read();
    }
}
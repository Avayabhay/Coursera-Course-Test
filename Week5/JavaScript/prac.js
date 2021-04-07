function greet(){
    let name = document.querySelector("#name").value;
    console.log(this);
    // let a  = document.createElement("div?")
    // document.getElementById("display").textContent = "Hello  "+name+" !";
    document.getElementById("display").innerHTML = `<h2> Hello ${name}!</h2>`;
};
document.querySelector("#btn").addEventListener("click",greet);


    
let display = document.querySelector("#display");

function greet(){
    var name = document.querySelector("#name").value;
    console.log(name);
    console.log(this);
    display.innerHTML = `<h2> Hello ${name}</h2>`;
};
document.querySelector("body").addEventListener("mousemove",
    function (event){
        if(event.shiftKey)
        {   console.log(event.clientX+" - is the X");
            console.log(event.clientY+" - is the y");
        }
    }
)
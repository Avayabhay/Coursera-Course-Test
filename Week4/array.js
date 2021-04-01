var names  = ["amit","rohit", "sunit"];
console.log(names);
for(var i=0;i<names.length; i++){
    console.log(names[i]);
}
names[3] = {
    name:"Aaarabh",
    work : "none"
}
console.log(names);
for(var i=0;i<names.length; i++){
    console.log(names[i]);
}

names[4] = function(n){
    console.log("tHis is a FUncTion"+n);
};


names[4]("YOYO");
names[5] = function Circle(a){
    console.log(a);
    return "DONE"}
console.log(names[5](3434343))
names[100] = "This is the last element";

for(var i=0;i<names.length; i++){
    console.log(names[i]);
}   
console.log(names)
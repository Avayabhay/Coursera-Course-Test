var x = "Hello World";
console.log(x);
console.log("THIS IS MY JAVA SCRIPT!")
var y;
console.log(y);
if(y == undefined){
    console.log("YO! YOU need to define y");
}
else{
    console.log("Y has been defined");
}
var x ="abhay";
var a = "abhay";
console.log(a+" is amazing");
if(a == x){
    console.log("BOth the strings are equal");
}
else{
    console.log("Different Strings");
}

a ="5";
b =5;
if(b==a){
    console.log("Equal");
}
else{
    console.log("Different");
}

if(a === b){
    console.log("Equal");
}
else{
    console.log("Differeent");
}
var sum =0;
for(var i=0;i<10;i++){
    sum += i;
    console.log(i);
}
console.log(sum+" is the sum of all i's")
for(var i =0;i<10;i++){
    console.log(i);
}


function func ()
{
    return "abhay";
}
console.log(func);


function addSub(subject){
    subject = subject || "whatever!"
    console.log("Maths with "+subject);
}

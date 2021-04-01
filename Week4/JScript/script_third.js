// function Multiply(x,y){
//     return x*y;
// };

// // console.log(Multiply(5,3));

// function Mul(multipier){
//     function res(x){
//         return x* multipier;
//     }
//     // console.log(res);
//     return res;
// }

// // console.log(Mul()); 

// // var multiplyby2 = Mul(2);
// // console.log(multiplyby2);
// // console.log(multiplyby2(5));


    
// var a ={x:5};
// var b =a;
// console.log(a);
// console.log(b);
// b.x = 7;
// console.log(a);
// console.log(b); 


// var Myfun = function(radius){
//     this.radius = radius;
//     this.name0 = "Amzain";
//     console.log(this);
// };
// console.log(Myfun());
// console.log(window.name0);



function Circle (radius){
    this.radius =radius;
    console.log(this);
    this.getArea = function (){
        return 3.14*radius*radius;
    };
    //return getArea;
};
// console.log(Circle);

firstC = new Circle(5);
console.log(firstC);
console.log(firstC.getArea());
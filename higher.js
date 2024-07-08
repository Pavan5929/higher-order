function arrayAnyOperation(arr,cb){

       for(ele of arr){
             cb(ele);
       }
}

let arr=[10,20,30,40,50];

function twice(num){
      
    console.log(num+":"+(num+num));
}

function trice(num){
     
    console.log(num+":"+(num+num+num));

}

function cube(num){
    console.log(num+":"+(num*num*num));
}

function square(num){

     console.log(num+":"+(num*num));
}

console.log("twice");
arrayAnyOperation(arr,twice);
console.log("trice");
arrayAnyOperation(arr,trice);
console.log("cube");
arrayAnyOperation(arr,cube);
console.log("square");
arrayAnyOperation(arr,square);
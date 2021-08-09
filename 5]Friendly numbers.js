var total = 10000;
var halfTotal = total / 2;
var a = [];
var sum = 0;

for (var i = 0; i < halfTotal; i++){
  if (total % i === 0){
    a.push(i);
    sum += i;
  }
}

console.log("Sum of all numbers under " + total + " is " + sum);
console.log(a);
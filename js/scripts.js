var num1 = parseInt(prompt("enter number 1"));
var num2 = parseInt(prompt("enter number 2"));
var divisor = 1;

if (num1 < num2){
  divisor = num1;
} else {
  divisor = num2;
}

function gcd (num1, num2, divisor){
  if (num1 % divisor === 0 && num2 % divisor === 0){
    return divisor;
  }
  return gcd(num1, num2, divisor-1);
}

alert(gcd(num1, num2, divisor));

// var prime = 2;
// var primeNums = [];
//
// for (i = 0; i < maxNum; i++){
//   if (isPrime(i) === true){
//     primeNums.push(i);
//   }
//
// }
//   alert(primeNums);
//
//
// function isPrime (num){
//   for (var i = 2; i < num; i++){
//     if ((num % i) === 0){
//       return false;
//     }
//   }
//   return true;
// }

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(num1,num2){
  let modifiedFood=[];
  for(let i=num1; i<num2-1; i++){
    modifiedFood.push(foods[i]);
  }
  return modifiedFood;
}

// Progression 2:
function spliced(){
  foods.splice(2,0,"noodles","icecream");
  return foods;

}

// Progression 3:
function isEven(number){
  return number%2==0 ? true:false;
}
function isPrime(number){
  if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) { 
        if (number % i === 0) {
            return false;
        }}
    return number;
}
function checkNumber(numberArray,operation){
  let newarray = numberArray.filter(operation)
  return newarray
}


// Progression 4:
function reject(numberArray){
  nonPrimeArray=[];
  numberArray.forEach(num=>{
    isPrime(num) ? null : nonPrimeArray.push(num); 
})
  return nonPrimeArray
}
function nonPrime(numberArray){
  return reject(numberArray)
}


// Progression 5:
const isEvenUsingLambda = number => number%2==0;


// Progression 6:
function squareOfNumber(number){
  return number**2
}
function findSquareOfNumbers(myArray){
  resultArray=[];
  for(let i=0;i<myArray.length;i++){
    square = squareOfNumber(myArray[i])
    resultArray.push(square)
  }
   return resultArray
}


// Progression 7:
function multiply(myArray){
  return myArray.reduce((mul, number)=>{
      return mul*number;
  },1);
}

function sumOfSquares(myArray){
  return myArray.map(squareOfNumber).reduce((sum,number)=>{
      return sum+number;
  },0)
}




const randInt=Math.floor(Math.random()*100)

//test whether random number is divisible by 7 and 9
console.log((randInt%7===0 && randInt%9===0))

//student grade generator
const studentGrade=(100-(Math.floor(Math.random()*50)))

//student grade ternary function
function gradeFinder(studentGrade){
    return (studentGrade>90) ? 'A' 
    : studentGrade>80 ? 'B' 
    : studentGrade>70 ? 'C'
    : studentGrade>60 ? 'D'
    : 'F';
}

//arithmetic operator function
function multiplier(factor1,factor2){
    return factor1*factor2;
}
//function call
console.log(gradeFinder(studentGrade));
//function-caller function
arrow_caller = () => {
    const randint=Math.floor(Math.random()*100);
    const randint2=Math.floor(Math.random()*100);
    console.log(multiplier(randint,randint2));
};

arrow_caller()

var large_array = ["hi!","hello!","how are you?","I'm feeling jolly!","are you feeling jolly?","it's raining outside", "I'm starting to run out of things to say", "nanananana" ,"katamari damacy", "rvgf","squiggle","filbert","words","many words", "good words"]

//succession of function calls for length, first index, las index, and a random index
console.log(large_array.length)
console.log(large_array[0])
console.log(large_array[large_array.length-1])
console.log(large_array[Math.ceil(Math.random()*large_array.length)])
//alphabetical sort, string push, integer push, re-call of function to find its new length
large_array.sort()
large_array.push("I found more words!")
large_array.push(11)
console.log(large_array.length)

//creation of new array with values between 29 and 87
var inclusive_array =[]
for(x=0;x<20;x++){
    inclusive_array.push(Math.floor(Math.random()*(87-29)+29))
} 

console.log(inclusive_array.length)

//method for finding greatest consecutive difference
var greatest_difference=0
for(x=0;x<inclusive_array.length;x++){
    if(x<inclusive_array.length-2){
    var current_distance = Math.abs(inclusive_array[x]-inclusive_array[x+1])
        if(current_distance>greatest_difference){
            greatest_difference=current_distance
            
        }
        
    }
}
console.log("the greatest consecutive difference is", greatest_difference)

//squared array creator
squared_array=inclusive_array.map( number => { 
    return number*number
    ;})

console.log(squared_array)

//filtered array creator
largest_number=Math.max(...squared_array)
var filtered_array = squared_array.filter(number => {
    return number>(largest_number/2)
    ;})

console.log(filtered_array)
//reduced array creator
reduced_array = filtered_array.reduce( (number,accumulator) =>{
    return number+accumulator
    ;})

console.log(reduced_array)
//function for reporting the array with indices
let indexCounter=0
squared_array.forEach(number =>{
    console.log("array value ", indexCounter, " is ",number)
    indexCounter=indexCounter+1
})

// at this point, I realize how painful it is to have to read both camel-case and underscores-- I'll try to 
// just choose one or the other in the future.

//basic class with multiple params
class funClass{
    
    constructor(num1,num2,stringParam){
        this.num1=num1
        this.num2=num2
        this.stringParam=stringParam;

        
    }
    //built-in print function
    printVariables(){
        console.log(this.num1,",",this.num2,", ",this.stringParam)
    }
    
}

//class declaration
const instanceOfFun=new funClass(5,7,"yay, this works!")
instanceOfFun.printVariables()

//constructor for array of classes
let arrayOfClasses = []
for(x=0;x<10;x++){
    const randint= Math.floor(Math.random()*10)
    const randint2= Math.floor(Math.random()*10)
    var temporaryNum= x*2
    const stringParam = temporaryNum.toString()
    var genericClass = new funClass(randint,randint2, stringParam)
    arrayOfClasses.push(genericClass)
}

//filter for class array
closeToPenultimateArray= arrayOfClasses.filter(obj=>{
    return (obj.stringParam>10)
    ;})

console.log(closeToPenultimateArray)

//transformation of array values
NextToPenultimateArray= closeToPenultimateArray.map(obj=>{
    return obj.num1*2
    ;})


//for-each modification
NextToPenultimateArray.forEach(obj =>{
    obj.num2=obj.num1
    ;})


//custom sort function for array
NextToPenultimateArray.sort(function(a, b){return a+b})

//final console log
console.log('the results of my final sorting: ',NextToPenultimateArray)
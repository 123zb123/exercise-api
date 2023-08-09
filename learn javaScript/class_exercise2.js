// Exercise 1
function sumTwoNumbers(num1,num2){
    return num1 + num2
}

// Exercise 2
function moltiplyTwoNumbers(num1,num2){
    return num1 * num2
}

// Exercise 3
function subtractionTwoNumbers(num1,num2){
    return num1 - num2
}

// Exercise 4
function divTwoNumbers(num1,num2){
    return num1 % num2
}

// Exercise 5
function highTwoNumbers(num1,num2){
    return num1 > num2 ? num1 : num2
}

// Exercise 6
function evenNumber(number){
    return number % 2 == 0 ? 'Even' : 'Not even'
}

// Exercise 7
function triangularSquer(high, width){
    return high * width / 2
}

// Exercise 8
function sircleScope(radius){
    return radius * 2 * Math.PI
}

// Exercise 9
function sircleSquer(radius){
    return radius ** 2 * Math.PI
}

// Exercise 10

function longText(text1, text2){
    return text1.length > text2.length ? text1 : text2
}

// Exercise 11
function firstCharUpper(text){
    return `${text[0].toUpperCase()}${text.slice(1,text.length).toLowerCase()}`
}

function printHello(times){
    for(let i = 0; i < times; i++){
        console.log('Hello')
    }
}
printHello(3)

let arr = [1,2,3,4,5]
for(let i = arr.length-1; i >= 0; i--){
    console.log(arr[i])
}

const list = [1, 2, 3, 4];
list.map((el) => { return el * 2; }); // [2, 4, 6, 8]

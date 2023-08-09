// functions & arrays

//1
function returnArrayNumbers(number){
    let arr = []
    for (let i = 1; i < number; i++){
        arr.push(i)
    }
    return arr
}   

//2
function askNumbers(num){
    let sum = 0
    for (i = 0; i < num; i++){
        let input;
        input = +prompt('pleas insert a number: ')
        sum += input 
    }
    return sum
}
console.log(askNumbers(3))
//3
function maxNumberDel(arr){
    let num = arr[0]
    let index
    for (let i = 0; i < arr.length; i++){
        if (num < arr[i]){
            num = arr[i]
            index = i
        }
    }
    arr.splice(index,1)
    return num
}
function sortArrHigh(array){
    let newArr = []
    while (arr.length > 0){
        newArr.unshift(maxNumberDel(array))
    }
    return newArr
}

//4
function minNumberDel(arr){
    let num = arr[0]
    let index
    for (let i = 0; i < arr.length; i++){
        if (num > arr[i]){
            num = arr[i]
            index = i
        }
    }
    arr.splice(index,1)
    return num
}
function sortArrLow(array){
    let newArr = []
    while (arr.length > 0){
        newArr.unshift(minNumberDel(array))
    }
    return newArr
}

//5


function withOutMultiply(array){
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] === array[j]){
                array.splice(j,1)
                
            }
        }
    }
    return array
}

//6
function towArrays(arr1, arr2){
    let newArr = []
    for (num1 of arr1){
        newArr.push(num1)
    }
    for (num2 of arr2){
        newArr.push(num2)
    }
    let newSortArray = withOutMultiply(newArr)
    return newSortArray
}
let arr1 = [50, 14, 67, 93, 36, 56, 29]
let arr2 = [56, 14, 67, 93, 38, 60, 19]

// function typeOfVaribal(name){
//     switch (typeof(name)){
//         case 'string':
//             console.log('Good mornnig!')
//         case 'number':
//             console.log('Good evening')
//         case  'boolean':
//             console.log('Good afternoon')
//         default:
//             console.log('Hello kodcode')
//     }
// }
// typeOfVaribal('true')
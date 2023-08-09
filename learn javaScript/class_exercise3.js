// 1-loops & arrays
let arr = [1, 2, 3, 4, 5]

// a
function sumNumbers(arr){
    let sum = 0
    for (num of arr){
        sum += num
    }
    return sum
}

// b
function multiplyNumbers(arr){
    let sum = 0
    for (num of arr){
        sum *= num
    }
    return sum
}

// c
function avgNumbers(arr){
    let sum = 0
    for (num of arr){
        sum += num
    }
    return sum / arr.length
}

// d
function exchange(arr) {
    let lastElement = arr.pop()
    let firstElement = arr.shift()
    arr.unshift(lastElement)
    arr.push(firstElement)
    return arr
}

// e
function copyArray(arr){
    let nweArray = arr.slice(0, arr.length)
    console.log(nweArray)
}

// f
function reversArray(arr){
    for (let i = 0; i < arr.length; i++){
        let element = arr.pop(i)
        arr.splice(i, 0, element)
    }
    return arr
}

// g
function highNumber(arr){
    let num = arr[0]
    for (i of arr){
        if (i > num){
            num = i
        }
    }
    return num
}

// h
function evenArray(arr){
    let newArr = []
    for (i of arr){
        if (i % 2 === 0){
            newArr.push(i)
        }
    }
    return newArr
}

// 2-loops & arrays
let stringArray = ['apple', 'orange', 'coffee', 'Tel Aviv','down' ]

//a
function wordsToSentence(arr){
    let sentence = ''
    for (word of arr){
        sentence += `${word}${' '}`
    }
    return sentence
}

//b
function Sentence(arr){
    let sentence = ''
    for (word of arr){
        sentence += `${word}${', '}`
    }
    return sentence
}

//c
function sumChars(arr){
    let sum = 0
    for (word of arr){
        sum += word.length
    }
    return sum
}

//d
function arrToUpper(arr){
    let newArrUpper = []
    for (i of arr){
        newArrUpper.push(i.toUpperCase())
    }
    return newArrUpper
}

//e
function arrIfUpper(arr){
    let newArrUpper = []
    for (i of arr){
        if (i.length >= 6){
            newArrUpper.push(i)
        }

    }
    return newArrUpper
}

//f
function longWord(arr){
    let longest = ' '
    for (i of arr){
        if (i.length >= longest.length){
            longest = i
        }
    }
    return longest
}

//g
function wordsFourLetters(arr){
    let nweArray = []
    for (i of arr){
        if (i.length === 4){
            nweArray.push(i)
        }

    }
    return nweArray
}

//3-matrixes
let matrix = [
    [2, 3, 4],
    [4, 6, 8],
    [10, 13, 15]
];

//a
function printOneArray(matrix){
    return matrix[1]
}

//b
function printAllArrays(matrix){
    for (array of matrix){
      console.log(array)
    }
}

//c
function sumLongArrays(matrix){
    sum = 0
    for (array of matrix){
        sum += array.length
    }
    return sum
}

//d
function printAllNumbers(matrix){
    for (i = 0; i < matrix.length; i++){
        for (j = 0; j < matrix.length; j++){
            console.log(matrix[i][j])
        }
    }
}

//e
function graterThanFive(matrix){
    for (i = 0; i < matrix.length; i++){
        for (j = 0; j < matrix.length; j++){
            if (matrix[i][j] > 5){
            console.log(matrix[i][j])
            }
        }
    }
}

//f
function sumAllMatrix(matrix){
    let sum = 0
    for (i = 0; i < matrix.length; i++){
        for (j = 0; j < matrix.length; j++){
            sum += matrix[i][j]
        }
    }
    return sum
}

//4, 7 boom game!
function sevenBoom(number){
    for (let i = 1; i < number; i++){
        console.log(i === 7 ||  Math.floor(i / 10) === 7 || i % 7 === 0 ? 'Boom' : i)
    }
}
sevenBoom(100)
// 1

// function successPromise(num) {
//     return new Promise((reslove, reject) => {
//         if (num > 5) reslove("Success")
//         else {
//             reject("Not success")
//         }
//     })
// }

// successPromise(7)
// .then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// })

//2

function fullName(firstName, lastName) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(firstName + " " + lastName)
        }, 1000)


    }
    )
}

// fullName('zvika', 'berkovich').then(value => console.log(value))

//3

function addFive(num) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(num + 5)
        }, 500)
    })
}
function multiplyByTwo(num) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(num * 2)
        }, 500)
    })
}
function subtractTen(num) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(num - 10)
        }, 500)
    })
}


// addFive(5)
// .then((value) => multiplyByTwo(value))
// .then((number) => subtractTen(number))
// .then((result) => console.log(result))
// .catch((error) => console.error(error))



//4 

function divide(num1, num2) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            if (num2 === 0) {
                reslove(num1 / num2)
            } else {
                reslove('not divide in 0')
            }
        }, 500)
    })
}

// divide(4, 0)
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error))




// 5 - 2
function fullName(firstName, lastName) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(firstName + " " + lastName)
        }, 1000)


    }
    )
}

async function main(firstName, lastName) {
    const result = await fullName(firstName, lastName)
    console.log(result)
    console.log('hi what\'s up')

}

// main('zvika', 'berkovich')




//5 - 3

function addFive(num) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(num + 5)
        }, 500)
    })
}
function multiplyByTwo(num) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(num * 2)
        }, 500)
    })
}
function subtractTen(num) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(num - 10)
        }, 500)
    })
}

async function main(num) {
    let result = addFive(num)
    let result1 = await multiplyByTwo(result)
    let result3 = await subtractTen(result1)
    console.log(result3)
}
// main(5)


//6

function divide(num1, num2) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            if (num2 !== 0) {
                reslove(num1 / num2)
            } else {
                reject('not divide in 0')
            }
        }, 500)
    })
}

async function asyncDivide(num1, num2) {
    try {
        const result = await divide(num1, num2)
        return result
    } catch (error) {
        throw error
    }
}

asyncDivide(6, 0).then((value) => console.log(value)).catch((error) => console.error(error))


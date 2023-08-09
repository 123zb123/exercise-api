//1
function askUser1(){
    let userInput = prompt("Please enter a number:");
if (userInput > 10){
    console.log('grater than 10')
} else{
    console.log('less than 10')
  }
}

//2
function towNum(){
    let num1 = prompt('please enter a number 1')
    let num2 = prompt('please enter a number 2')
    if (num1 > num2){
        console.log(num1)
    }else if (num2 > num1){
        console.log(num2)
    }
}

//3
function askText(){
    let textUser = prompt('enter a string')
    if (textUser.length > 20){
        console.log('over 20 charaters')
    }if (textUser.length > 10){
        console.log('over 10 charaters')
    }if (textUser.length < 10){
        console.log('less 10 charaters')
    }
}

//4
function askLenText(){
    let textUser = prompt('please enter a text : ')
    if (textUser.length > 20){
        console.log(textUser.slice(0,20))
    }else if(textUser.length < 20){
        console.log(textUser.length)
    }
}

//5
function daysWeek(){
    let day = prompt(('please enter the number of the day: '))
    switch (+day){
        case 1:
            console.log('Sunday')
            break
        case 2:
            console.log('Monday')
            break
        case 3:
            console.log('Tuesday')
            break
        case 4:
            console.log('Wednesday')
            break
        case 5:
            console.log('Thursday')
            break
        case 6:
            console.log('Friday')
            break
        case 7:
            console.log('Saturday')
            break
        default:
            console.log('the number is worng.')

    }
}


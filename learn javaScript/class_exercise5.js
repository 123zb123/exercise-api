//1
let person3 = {
    id : 1,
    name : 'John',
    age : 30,
    address : {city : 'London', street : 'Abbay Road'},
    children : [{
        name : 'John Jounior',
        age : 5
    },{
        name : 'Lilly',
        age : 2,
    },{
        name : 'koko',
        age : 9
    }] 
}

let person1 = {
    id : 3,
    name : 'moshe',
    age : 50,
    address : {city : 'New York', street : 'Brooklin'},
    children : [{
        name : 'moshe Jounior',
        age : 4
    },{
        name : 'koby',
        age : 2,
    }] 
}

let person2 = {
    id : 2,
    name : 'zvika',
    age : 40,
    address : {city : 'Tel Aviv', street : 'Begin'},
    children : [{
        name : 'chaim',
        age : 5
    },{
        name : 'ory',
        age : 8,
    }] 
}

// //a
// console.log(perso3.name)
// //b
// console.log(perso3.age)
// //c
// console.log(perso3.address.city)
// //d
// console.log(perso3.address.street)
// //e
// console.log(perso3.children.length)
// //f
// console.log(perso3.children[0])
// //g
// console.log(perso3.children[1])

// //2
// console.log(perso3.children[0].age > perso3.children[1].age ? perso3.children[0] : perso3.children[1] )

// //3
// console.log(perso3.children[0].age < perso3.children[1].age ? perso3.children[0] : perso3.children[1] )

let personsArray = [person1, person2, person3]
// return id of tha oldest men
function highAge(persons){
    let maxAge = persons[0].age 
    let idPerson = persons[0].id
    for (let i = 0; i < persons.length; i++){
        if(persons[i].age > maxAge){
            idPerson = persons[i].id
        }
    }
    return idPerson
}
// return who have many children
function highKids(persons){
    let maxKids = persons[0].children.length
    let idPerson = persons[0].id
    for (let i = 0; i < persons.length; i++){
        if(persons[i].age > maxAge){
            idPerson = persons[i].id
        }
    }
    return idPerson
    
}
//1.1 /1.2

const div = document.querySelector('div')
div.style.margin = "100px"

const button = document.querySelector('button')

const button5 = document.querySelector('.use')

button.addEventListener('click', async () => {
    div.replaceChildren()
    const user = await getRandomUser();
    createUserCard(user);
})

button5.addEventListener('click', async () => {
    let userArr = await getMenyUsers(5); 
    console.log(userArr)
    userArr.forEach(element => {
        createUserCard(element)
    });
})

function createUserCard(user) {

    const h2 = document.createElement('h2')
    div.appendChild(h2)
    h2.textContent = `${user.name.title} ${user.name.first}  ${user.name.last} ${user.dob.age} `

    const h3 = document.createElement('h3')
    div.appendChild(h3)
    h3.textContent = user.email

    const img = document.createElement('img'); 
    img.src = user.picture.large;
    div.appendChild(img);
}

async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json();
    return data.results[0];
}

async function getMenyUsers(num) {
    let arr = []
    while (arr.length < num) {
        let res = await fetch('https://randomuser.me/api')
        let data = await res.json();
        if (data.results[0].gender !== "female") {
            arr.push(data.results[0])
        }
    }
    return arr
}  
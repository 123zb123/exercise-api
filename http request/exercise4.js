const form = document.getElementById('userForm');

form.addEventListener('submit', event => {
    event.preventDefault();

    const nameValue = document.getElementById('1').value;
    const familyValue = document.getElementById('2').value;
    const emailValue = document.getElementById('3').value;
    const ageValue = document.getElementById('4').value;

    const reqOptions = {
        method: 'post',
        body: JSON.stringify({
            name: nameValue,
            family: familyValue,
            email: emailValue,
            age: ageValue
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch("https://jsonplaceholder.typicode.com/users", reqOptions)
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
});

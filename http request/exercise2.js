
const div = document.querySelector('div'); 




async function getJoke() {
    try {
        const headers = {
            'x-api-key': 'f473e0d5d3d546f9b96e6b5b28407a98'
        };

        const res = await fetch('https://api.humorapi.com/jokes/search', {
            method: 'GET',
            headers: headers
        });

        const data = await res.json();
        console.log(data)
        div.textContent = data.jokes[0].joke
    } catch (error) {
        console.error(error);
    }
}

getJoke();

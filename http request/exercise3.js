

async function productsList () {
    
    const ul = document.createElement('ul')
    document.body.appendChild(ul)

    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    data.forEach(element => {
        const li = document.createElement('li')
        ul.appendChild(li)
        li.style.marginTop = '20px'
        li.textContent = element.title
    });

}

productsList()
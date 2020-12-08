document.getElementById('addItem').addEventListener('click', event => {
    event.preventDefault()
    axios.post('/api/items', {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        description: document.getElementById('description').value,
        link: document.getElementById('link').value
    })
        .then(() => {
            let itemElem = document.createElement('div')
            itemElem.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <div class="card-header">${document.getElementById('name').value}</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">$ ${document.getElementById('price').value}</li>
                        <li class="list-group-item">${document.getElementById('description').value}</li>
                        <li class="list-group-item">${document.getElementById('link').value}</li>
                    </ul>
                </div>
            `
            document.getElementById('gifts').append(itemElem)
            document.getElementById('name').value = ''
            document.getElementById('price').value = ''
            document.getElementById('description').value = ''
            document.getElementById('link').value = ''
        })
        .catch(err => console.error(err))
})
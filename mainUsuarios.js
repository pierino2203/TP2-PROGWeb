(() => {
    // Ejercicio 2- Lista de Usuarios
    const form = document.getElementById('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        const cant = form.querySelector('input[type="number"]').value
        const usuarios = fetch(`https://randomuser.me/api/?results=${cant}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            const res = data.results.map(e => {
                return({
                    img: e.picture.large,
                    last: e.name.last,
                    name: e.name.first,
                    email: e.email,
                    phone: e.phone,
                    cel: e.cell
                })
            })
            dibujarCard(res)
            document.getElementById('form').reset()
        })

    })
    function dibujarCard(res){
        const templateCard = document.getElementById('card')
        const lista = document.getElementById('listaCards')
        lista.innerHTML=''
        const fragmento = document.createDocumentFragment()
        res.forEach(e => {
            const card = templateCard.content.cloneNode(true)
            card.querySelector('img').src=e.img
            card.querySelector('h4').textContent=`${e.last}, ${e.name}`
            card.querySelector('p[class="email"]').textContent=`Mail: ${e.email}`
            card.querySelector('p[class="phone"]').textContent=`Tel: ${e.phone}`
            card.querySelector('p[class="cel"]').textContent=`Cel: ${e.cel}`
            lista.appendChild(card)
        });
    }
})()

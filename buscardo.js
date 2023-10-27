(()=>{
const form = document.getElementById('form')
form.addEventListener('submit', async e => {
    e.preventDefault()
    const name= form.querySelector('input[type="text"]').value
    console.log(name)
    const shows = await (await (fetch(`https://api.tvmaze.com/search/shows?q=${name}`))).json()
    console.log( shows)
    const res = shows.map(e=>   {
        return({
            img: e.show.image?.medium,
            name: e.show.name,
            type: e.show.type,
            language: e.show.language,
            genres: e.show.genres.join(','),
            status: e.show.status,
            rating: e.show.rating.average? e.show.rating.average : 'Not Rating', 
            summary: e.show.summary? e.show.summary.replace(/<[^>]*>/g, '') : "Not Summary" 
        })
        
    })
    dibujarCard(res)
    document.getElementById('form').reset();
})
function dibujarCard(res){
    console.log(res)
    if(res.length === 0){
        console.log('hola')
        const templateCard = document.getElementById('card')
        const lista = document.getElementById('listaCards')
        alert('Sin Resultados, Ingrese otro Show')
    }
    
    const templateCard = document.getElementById('card')
    const lista = document.getElementById('listaCards')
    lista.innerHTML=''
    const fragmento = document.createDocumentFragment()
    res.forEach(e => {
        const card = templateCard.content.cloneNode(true)
        card.querySelector('img').src=e.img
        card.querySelector('h4').textContent=`Titulo: ${e.name}`
        card.querySelector('p[class="type"]').textContent=`Type: ${e.type}`
        card.querySelector('p[class="language"]').textContent=`Language: ${e.language}`
        card.querySelector('p[class="genres"]').textContent=`Genres: ${e.genres}`
        card.querySelector('p[class="status"]').textContent=`Status: ${e.status}`
        card.querySelector('p[class="rating"]').textContent=`Rating: ${e.rating}`
        card.querySelector('p[class="summary"]').textContent=`Summary: ${e.summary}`
        lista.appendChild(card)
    });
    res=[];
}

})()
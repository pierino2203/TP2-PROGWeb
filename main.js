(() => {
    var arrayEstudiantes = [{legajo: '12345',apellido :'Juncos',nombre:'Pierino', nota:'9'},{legajo: '57769',apellido :'Juncos',nombre:'Pierino', nota:'9'},{legajo: '54321',apellido :'Juncos',nombre:'Pierino', nota:'9'}]

    mostrarEstudiantes(arrayEstudiantes)
    console.log(arrayEstudiantes)
    document.querySelector('form')
        .addEventListener('submit', e => {
            e.preventDefault();
            mostrarEstudiantes(arrayEstudiantes)
            const data = Object.fromEntries(
                new FormData(e.target)
            )
            arrayEstudiantes.push(data)
            mostrarEstudiantes(arrayEstudiantes)
            document.getElementById('form').reset();




        })
    // console.log(arrayEstudiantes)
    const eliminar = document.getElementById('tablita')
    eliminar.addEventListener('click', e =>{
        e.preventDefault()
        const nuevoArray = arrayEstudiantes.filter((el) => el.legajo!==e.target.value)
        console.log(nuevoArray)
        arrayEstudiantes = nuevoArray
        const template = document.getElementById('tablaRow')
        const tabla = document.getElementById('tablita')
        tabla.innerHTML=''
        mostrarEstudiantes(arrayEstudiantes);
    })        
    function mostrarEstudiantes(arrayEstudiantes) {
        const template = document.getElementById('tablaRow')
        const tabla = document.getElementById('tablita')
        tabla.innerHTML=''
        const templateRow = template.content;
        const fragmento = document.createDocumentFragment()
        console.log(arrayEstudiantes)
        arrayEstudiantes.forEach(e => {
            // console.log(e)
            let tr = templateRow.cloneNode(true)
            let legajo = tr.querySelector('.tablaLegajo')
            legajo.textContent = `${e.legajo}`
            let apellido = tr.querySelector('.tablaApellido')
            apellido.textContent = `${e.apellido}`
            let nombre = tr.querySelector('.tablaNombre')
            nombre.textContent = `${e.nombre}`
            let nota = tr.querySelector('.tablaNota')
            nota.textContent = `${e.nota}`
            let button = tr.querySelector('.btnEli')
            button.value=`${e.legajo}`
            // console.log(button.value)
            tabla.appendChild(tr)
        });

    }
})()
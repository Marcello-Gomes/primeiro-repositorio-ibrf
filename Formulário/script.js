document.getElementById("formulario-cadastro").addEventListener('submit', (event)=> {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value; 
    const form = { nome, email, senha }
    //alert(JSON.stringify(form, null, 2))

/*
    fetch(' http://localhost:3000/casdastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(form)

    })
    */
   axios.post('http://localhost:3000/casdastro', data)

})


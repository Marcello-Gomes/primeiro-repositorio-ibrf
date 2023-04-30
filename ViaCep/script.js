function consultarCep() {
    let cep = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let tabela = document.getElementById("tabela")

    axios.get(url).then(response => {

        if (response.data.erro) {
            alert("CEP não encontrado")
        }
        /*
                tabela.innerHTML = '';
                let linha = tabela.insertRow();
                let cepCelula = linha.insertCell(0);
                let logradouroCelula = linha.insertCell(1);
                let bairroCelula = linha.insertCell(2);
                let cidadeCelula = linha.insertCell(3);
                let estadoCelula = linha.insertCell(4); 

                ou
        
                */


        
        let linha = document.createElement("tr");
        let cepCelula = document.createElement("td");
        let logradouroCelula = document.createElement("td");
        let bairroCelula = document.createElement("td");
        let cidadeCelula = document.createElement("td");
        let estadoCelula = document.createElement("td");

        cepCelula.innerHTML = response.data.cep;
        logradouroCelula.innerHTML = response.data.logradouro;
        bairroCelula.innerHTML = response.data.bairro;
        cidadeCelula.innerHTML = response.data.localidade;
        estadoCelula.innerHTML = response.data.uf;

        linha.appendChild(cepCelula);
        linha.appendChild(logradouroCelula);
        linha.appendChild(bairroCelula);
        linha.appendChild(cidadeCelula);
        linha.appendChild(estadoCelula);

        tabela.appendChild(linha);







    })
        .catch(error => {
            alert("Error ao consultar o viaCEP");
            console.error(error);
        })


}
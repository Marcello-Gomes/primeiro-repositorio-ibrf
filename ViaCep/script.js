function consultarCep() {
    let cep = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let tabela = document.getElementById("tabela")

    axios.get(url).then(response => {
        tabela.innerHTML = '';
        if (response.data.erro) {
            alert("CEP não encontrado")
        }

        let linha = tabela.insertRow();
        let cepCelula = linha.insertCell(0);
        let logradouroCelula = linha.insertCell(1);
        let bairroCelula = linha.insertCell(2);
        let cidadeCelula = linha.insertCell(3);
        let estadoCelula = linha.insertCell(4);




    })
        .catch(error => {
            alert("Error ao consultar o viaCEP");
            console.error(error);
        })


}
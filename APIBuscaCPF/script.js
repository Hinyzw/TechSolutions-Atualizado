//Função para consumi a API
function buscar(){
    //Carrega o JSON e processa os dados
    fetch('https://raw.githubusercontent.com/Hinyzw/APICPF/main/dados.json').then(resposta => resposta.json()).then(corpo =>{
        console.log(corpo)

        var identificador = document.getElementById('valor').value
        var encontrado = false;

        corpo.forEach(pessoa => {
            if(identificador == pessoa.cpf){
                var link1= `<a href="${pessoa.link}">Visite nosso site</a>`
                document.getElementById('imagem').innerHTML = pessoa.imagem;
                document.getElementById('nome').innerHTML = pessoa.nome;
                document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
                document.getElementById('cidade').innerHTML = pessoa.cidade;
                document.getElementById('pais').innerHTML = pessoa.pais;
                document.getElementById('link').innerHTML = link1;

                document.getElementById('erro').innerHTML = "";
                encontrado = true;
            }
        })
        if(!encontrado){
            document.getElementById('erro').innerHTML = "registro invalido";
        }
        console.log(corpo)
    })
    
}

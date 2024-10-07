//conectar com a API usando FETCH

fetch('https://raw.githubusercontent.com/Hinyzw/MelanieAPI/refs/heads/main/ecommerce.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    document.getElementById('imagem').innerHTML = corpo.imagem
    document.getElementById('nome').innerHTML = corpo.nome
    document.getElementById('preco').innerHTML = corpo.preco

    document.getElementById('imagem2').innerHTML = corpo.imagem2
    document.getElementById('nome2').innerHTML = corpo.nome2
    document.getElementById('preco2').innerHTML = corpo.preco2

    document.getElementById('imagem3').innerHTML = corpo.imagem3
    document.getElementById('nome3').innerHTML = corpo.nome3
    document.getElementById('preco3').innerHTML = corpo.preco3
})
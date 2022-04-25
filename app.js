const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const listarLivrosLidosERecomendados = require('./controllers/listarRecomendados')

const resposta = read.question(`
================= Menu =================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livro nao lidos

5 - SAIR

Digite um numero[1-5]:
`)

switch (resposta) {
    case '1':
        buscarLivros()
        break
    case '2':
        listarLivrosOrdenados()
        break
    case '3':
        listarLivrosLidosERecomendados()
        break
    case '4':
        listarLivrosNaoLidos()
        break
    case '5':
        console.log(`Saindo...`)
        break        
    default:
        console.log(`Fim do Algoritmo`)

}
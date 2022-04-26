// Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.

const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {

    const opcaoInicial = read.question('Deseja ver os livros ordenados por quantidade de paginas? S/N ').toUpperCase()
    if (opcaoInicial === 'S') {

        livros.sort((livroA, livroB) => {
            return livroA.paginas - livroB.paginas
        })

        console.table(livros)
    }
}

module.exports = listarLivrosOrdenados

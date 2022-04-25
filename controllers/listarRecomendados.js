// Deverá listar livros que já foram lidos e que são recomendados

const livros = require('../database')
const read = require('readline-sync')

const listarLivrosLidosERecomendados = () => {

    const opcaoInicial = read.question('Deseja ver os livros lidos e recomendados? S/N ').toUpperCase()

    if (opcaoInicial === 'S') {
        console.log('oi')
        const livrosLidosERecomendados = livros.filter(livro => livro.leu === true && livro.recomenda === true)
        console.table(livrosLidosERecomendados)

    }
}

module.exports = listarLivrosLidosERecomendados
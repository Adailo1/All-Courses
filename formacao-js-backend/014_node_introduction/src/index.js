// Importa o módulo 'fs' para trabalhar com o sistema de arquivos
const fs = require('fs')

// Importa o módulo criado trataErros
const trataErros = require('./erros/funcoesErro')

// Captura todos os argumentos da linha de comando passados para o script
const caminhoArquivo = process.argv

// O terceiro argumento é o caminho do arquivo que queremos ler
const link = caminhoArquivo[2]

// Lê o arquivo especificado pelo caminho 'link' usando a codificação 'UTF-8'
fs.readFile(link, 'UTF-8', (erro, texto) => {
    // Tenta processar o texto lido e contabilizar as palavras
    try {
        // Se houver um erro na leitura do arquivo, lança uma exceção
        if (erro) throw erro
        // Chama a função 'contaPalavras' para contabilizar as palavras no texto
        contaPalavras(texto)
    } catch (erro) {
        // Chama a função 'trataErros' para lidar com o erro ocorrido
        trataErros(erro)
    }
})

//Conta o número de vezes que uma palavra se repete em cada parágrafo
function contaPalavras(texto){
    //Divide o texto em parágrafos e joga em um array
    const paragrafo = extraiParagrafos(texto) 

    // Mapeia cada parágrafo para a contagem de palavras duplicadas
    const contagem = paragrafo.flatMap(paragrafo => {
        // Verifica se o parágrafo não está vazio; se estiver, retorna um array vazio
        if (!paragrafo) return [] //flatMap achata as listas vazias, por isso esse retorno
        
        // Chama a função 'verificaPalavrasDuplicadas' para contar as palavras duplicadas no parágrafo atual
        return verificaPalavrasDuplicadas(paragrafo)
    })

    // Imprime a contagem de palavras duplicadas para cada parágrafo
    console.log(contagem)
}

//Separa o texto em parágrafos
function extraiParagrafos(texto){
    // Converte o texto para minúsculas e divide-o em parágrafos usando a quebra de linha como delimitador
    return texto.toLowerCase().split('\n')
}

//Limpa os caracteres especiais da palavra
function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

//Recebe um texto e retorna um array de objetos com quantas vezes cada palavra apareceu no texto 
function verificaPalavrasDuplicadas(texto) {
    // Divide o texto em palavras usando o espaço como delimitador e armazena em um array
    const listaPalavras = texto.split(' ')

    // Cria um objeto para armazenar o resultado da contagem de palavras
    const resultado = {}

    // Itera sobre cada palavra na lista de palavras
    listaPalavras.forEach(palavra => {
        // Incrementa a contagem da palavra no objeto 'resultado'
        // Se a palavra já existir, incrementa; caso contrário, inicia com 0 e soma 1
        // Limpa as palavras com caracteres especiais
        // Não colocar palavras como (e, de, com, ou, etc...)

        if (palavra.length >= 3){
            const palavraLimpa = limpaPalavras(palavra)
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    })
    return resultado
}


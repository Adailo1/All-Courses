// Importa o módulo 'fs' para trabalhar com o sistema de arquivos
const fs = require('fs')

// Captura todos os argumentos da linha de comando passados para o script
const caminhoArquivo = process.argv

// O terceiro argumento é o caminho do arquivo que queremos ler
const link = caminhoArquivo[2]

// Lê o arquivo especificado pelo caminho 'link' com a codificação 'UTF-8'
fs.readFile(link, 'UTF-8', (erro, texto) => {
    // Imprime os parágrafos já contabilizados
    quebraEmParagrafos(texto)
})

// Função que divide um texto em parágrafos e conta as palavras duplicadas em cada um
function quebraEmParagrafos(texto) {
    // Converte o texto para minúsculas e divide em parágrafos usando a quebra de linha como delimitador
    const paragrafo = texto.toLowerCase().split('\n')

    // Mapeia cada parágrafo para a contagem de palavras duplicadas
    const contagem = paragrafo.map(paragrafo => {
        // Chama a função 'verificaPalavrasDuplicadas' para contar as palavras no parágrafo atual
        return verificaPalavrasDuplicadas(paragrafo)
    })

    // Imprime a contagem de palavras duplicadas para cada parágrafo
    console.log(contagem)
}

function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

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


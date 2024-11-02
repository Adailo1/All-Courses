// Importa o módulo 'fs' para trabalhar com o sistema de arquivos
const fs = require('fs')

// Captura todos os argumentos da linha de comando passados para o script
const caminhoArquivo = process.argv

// O terceiro argumento é o caminho do arquivo que queremos ler
const link = caminhoArquivo[2]

// Lê o arquivo especificado pelo caminho 'link' com a codificação 'UTF-8'
fs.readFile(link, 'UTF-8', (erro, texto) => {
    // Imprime o conteúdo do arquivo no console
    verificaPalavrasDuplicadas(texto)
});

function verificaPalavrasDuplicadas(texto) {
    // Divide o texto em palavras usando o espaço como delimitador e armazena em um array
    const listaPalavras = texto.split(' ')

    // Cria um objeto para armazenar o resultado da contagem de palavras
    const resultado = {}

    // Itera sobre cada palavra na lista de palavras
    listaPalavras.forEach(palavra => {
        // Incrementa a contagem da palavra no objeto 'resultado'
        // Se a palavra já existir, incrementa; caso contrário, inicia com 0 e soma 1
        resultado[palavra] = (resultado[palavra] || 0) + 1
    })

    console.log(resultado)
}


// Imports
import fs from 'fs'
import trataErros from './erros/funcoesErro.js'
import { contaPalavras } from './index.js'

// Captura todos os argumentos da linha de comando passados para o script
const caminhoArquivo = process.argv

// O terceiro argumento é o caminho do arquivo que queremos ler
const link = caminhoArquivo[2]

// O quarto argumento é o caminho do arquivo que queremos escrever
const endereco = caminhoArquivo[3]

// Lê o arquivo especificado pelo caminho 'link' usando a codificação 'UTF-8'
fs.readFile(link, 'UTF-8', (erro, texto) => {
    // Tenta processar o texto lido e contabilizar as palavras
    try {
        // Se houver um erro na leitura do arquivo, lança uma exceção
        if (erro) throw erro
        // Chama a função 'contaPalavras' para contabilizar as palavras no texto
        const resultado = contaPalavras(texto) //Salva o objeto na variável resultado
        criaESalvaArquivo(resultado, endereco)
    } catch (erro) {
        // Chama a função 'trataErros' para lidar com o erro ocorrido
        trataErros(erro)
    }
})

async function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`
    const textoPalavras = JSON.stringify(listaPalavras)
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras)
        console.log('Arquivo criado')
    } catch (erro){
        throw erro
    }
}
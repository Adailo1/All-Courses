// Imports
import fs from 'fs'
import trataErros from './erros/funcoesErro.js'
import { contaPalavras } from './index.js'
import { montaSaidaArquivo } from './helpers.js'
import { Command } from 'commander'

const program = new Command()

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action(options => {
        const { texto, destino } = options

        if (!texto || !destino){
            console.error('erro: favor inserir caminho de origem e destino')
            program.help()
            return
        } 
    })

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
        // Chama a função que cria o arquivo com os dados coletados do texto
        criaESalvaArquivo(resultado, endereco)
    } catch (erro) {
        // Chama a função 'trataErros' para lidar com o erro ocorrido
        trataErros(erro)
    }
})

async function criaESalvaArquivo(listaPalavras, endereco) {
    // Define o caminho do novo arquivo como "resultado.txt" dentro do diretório fornecido
    const arquivoNovo = `${endereco}/resultado.txt`;

    // Converte a lista de palavras em uma string no formato JSON
    const textoPalavras = montaSaidaArquivo(listaPalavras)

    try {
        // Tenta escrever a string no arquivo
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        // Se der certo, imprime uma mensagem de sucesso
        console.log('Arquivo criado');
    } catch (erro) {
        // Se ocorrer um erro, lança o erro para ser tratado mais tarde
        throw erro;
    }
}

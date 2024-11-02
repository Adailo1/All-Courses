// Imports
import fs from 'fs'
import path from 'path'
import trataErros from './erros/funcoesErro.js'
import { contaPalavras } from './index.js'
import { montaSaidaArquivo } from './helpers.js'
import { Command } from 'commander'

// Criação de uma nova instância do comando usando a biblioteca 'commander'
const program = new Command()

// Definindo a versão do programa
program
    .version('0.0.1')
    // Opção para receber o caminho do arquivo de texto a ser processado
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    // Opção para definir o caminho onde o arquivo de resultados será salvo
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    // Ação a ser executada quando o comando for chamado
    .action(options => {
        // Desestruturação das opções fornecidas pelo usuário
        const { texto, destino } = options

        // Verifica se ambos os caminhos foram fornecidos
        if (!texto || !destino) {
            // Mensagem de erro se os caminhos não forem especificados
            console.error('erro: favor inserir caminho de origem e destino')
            program.help() // Mostra a ajuda do programa
            return
        } 

        // Resolve os caminhos absolutos para os arquivos
        const caminhoTexto = path.resolve(texto)
        const caminhoDestino = path.resolve(destino)

        try {
            // Chama a função que processa o arquivo
            processaArquivo(caminhoTexto, caminhoDestino)
            // Mensagem de sucesso após o processamento
            console.log('Texto processado com sucesso');
        } catch (erro) {
            // Captura e exibe erros que possam ocorrer durante o processamento
            console.log('Ocorreu um erro no processamento', erro)
        }
    })  

// Parseia os argumentos fornecidos pelo usuário na linha de comando
program.parse()


// Lê o arquivo especificado pelo caminho commander usando a codificação 'UTF-8'
function processaArquivo(texto, destino){
    fs.readFile(texto, 'UTF-8', (erro, texto) => {
        // Tenta processar o texto lido e contabilizar as palavras
        try {
            // Se houver um erro na leitura do arquivo, lança uma exceção
            if (erro) throw erro
            // Chama a função 'contaPalavras' para contabilizar as palavras no texto
            const resultado = contaPalavras(texto) //Salva o objeto na variável resultado
            // Chama a função que cria o arquivo com os dados coletados do texto
            criaESalvaArquivo(resultado, destino)
        } catch (erro) {
            // Chama a função 'trataErros' para lidar com o erro ocorrido
            trataErros(erro)
        }
    })
}

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

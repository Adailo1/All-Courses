//Conta o número de vezes que uma palavra se repete em cada parágrafo, exportando módulo
export function contaPalavras(texto){
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
    return contagem
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

// retorna um array contendo as chaves (palavras) do objeto cujos valores são maiores que 1, ou seja, palavras que aparecem mais de uma vez.
function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

// A função gera uma string 'textoFinal' que lista as palavras duplicadas
function montaSaidaArquivo(listaPalavras) {
    let textoFinal = ''
    try {
        listaPalavras.forEach((paragrafo, indice) => {
            // Chama filtraOcorrencias para obter as palavras duplicadas
            const duplicadas = filtraOcorrencias(paragrafo)
            if (duplicadas.length > 0) {//Verifica se no parágrafo existem palavras duplicadas
                // Adiciona as palavras duplicadas ao textoFinal
                textoFinal += `Palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas.join(', ')} \n\n`
            }
        });
    } catch (erro) {
        // Registra qualquer erro que ocorra durante a execução
        console.error(erro)
    }

    // Retorna o texto gerado com as palavras duplicadas ou mensagens de ausência
    return textoFinal
}

// Exporta a função montaSaidaArquivo para ser utilizada em outros módulos
export { montaSaidaArquivo }

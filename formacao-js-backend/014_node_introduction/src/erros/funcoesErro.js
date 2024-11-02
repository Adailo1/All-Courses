// Função que trata erros relacionados à leitura de arquivos
function trataErros(erro) {
    // Verifica se o erro é do tipo 'ENOENT', que indica que o arquivo não foi encontrado
    if (erro.code === 'ENOENT') {
        // Lança uma nova exceção com uma mensagem específica para arquivo não encontrado
        throw new Error('Arquivo não encontrado');
    } else {
        // Retorna uma mensagem genérica para outros tipos de erro na aplicação
        return 'Erro na aplicação';
    }
}

// Exporta a função para uso em outros módulos
module.exports = trataErros;

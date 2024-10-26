//Em uma lista com nomes, coloque todos os caractéres em letras maiúscula

const nomes = ['aDAilo', 'jOão', 'RoNALDO', 'pEDRO']

const nomesMaiusculo = nomes.map(nome => nome.toLocaleUpperCase())

console.log(nomesMaiusculo)
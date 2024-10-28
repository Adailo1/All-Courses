const objetoOriginal = {
    nome: "GPT",
    linguagem: "JavaScript",
    framework: "Node.js",
    versao: "14.17.3"
  };
  
  const objetoNovo = {
    ...objetoOriginal,
    atualizacao: "15.0.0"
  }

  console.log(objetoNovo)
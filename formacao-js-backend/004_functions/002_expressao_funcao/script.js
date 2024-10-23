const estudanteReprovou = function (notaFinal, faltas) {//Não tem hoisting 
    if (notaFinal < 7 && faltas > 4) {
      return true;
    } else {
      return false;
    }   
}
  
console.log(estudanteReprovou(6, 5) ? "Reprovou" : "Não reprovou");
console.log(estudanteReprovou(10, 2));
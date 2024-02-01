alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto  chute não for igual ao numero Secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break
        alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`o  Numero secreto é menor que ${chute}`);
        } else {
            alert(`o  Numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}
  let palvraTentativa = tentativas > 1 ? 'tentavias': 'tentativa';
  alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palvraTentativa}`);

//if (tentativas >  1 ){
    //alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}else{
    //alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}

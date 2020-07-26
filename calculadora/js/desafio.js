let resposta = document.querySelector('span');


let calcular = (valor, horas) => {

    let valorTotal = valor.value * horas.value;
    resposta.textContent = 'R$ ' + valorTotal;
}

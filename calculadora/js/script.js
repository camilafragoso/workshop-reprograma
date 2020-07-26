let resultado = document.querySelector('span');


let calcularValorHora = (salario, horas) => {

    let valorHora = (salario.value / (horas.value * 22)).toFixed(2);

    resultado.textContent = 'R$ '+ valorHora;
}
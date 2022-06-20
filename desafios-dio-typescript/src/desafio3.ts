// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLTitleElement;
let soma = document.getElementById('soma') as HTMLInputElement;

let total = 0;

function somarAoSaldo(soma: number) {
    total += soma;
    return campoSaldo.innerHTML = total.toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    return somarAoSaldo(parseInt(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

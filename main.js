const form = document.getElementById('form-contatos')
const corpoTabela = document.querySelector('tbody');

var linhas = '';

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const nomeContato = document.getElementById('nome-contato')
    const numeroContato = document.getElementById('numero-contato')
    var linha = '<tr>';

    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha

    corpoTabela.innerHTML = linhas;

    nomeContato.value = '';
    numeroContato.value = '';

})
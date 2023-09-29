const form = document.getElementById('form-contatos')

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const nomeContato = document.getElementById('nome-contato')
    const numeroContato = document.getElementById('numero-contato')

    alert(`O nome do Contato é ${nomeContato.value} e o número dele é ${numeroContato.value}`)
})
const form = document.getElementById('form-agenda');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputnomecontato = document.getElementById('nome-agenda');
    const inputcontato = document.getElementById('nome-contato');

    let linha = '<tr>';
    linha += `<td>${inputnomecontato.value}</td>`;
    linha += `<td>${inputcontato.value}</td>`;
    linha += `<td>${inputnomecontato.value >=0 ? 'adicionado' : 'agendado(@)'}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpotabela =document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

    inputnomecontato.value = '';
    inputcontato.value= '';

    
});
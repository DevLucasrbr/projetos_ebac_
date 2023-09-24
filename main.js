    const form = document.getElementById('form-deposito');
    const nomedestinatario = document.getElementById('nome-destinatario');
    let formEvalido = false;

    function validanome(nomecompleto) {
    const nomecomoArray = nomecompleto.split(' ');
    return nomecomoArray.length >= 2;
    }
    
    form.addEventListener("submit", function(e) { 
    e.preventDefault();

    const numerodaconta = document.getElementById('numero-conta');
    const valordeposito = document.getElementById('valor-deposito');
    const mensagemsucesso = `montante de: <b>${
        valordeposito.value
    }</b> depositado para o cliente: <b>${
        nomedestinatario.value
    }</b> - conta <b>${
        numerodaconta.value
    }</b>`;

    formEvalido = validanome(nomedestinatario.value)
    if (formEvalido) {
    
    const containermensagemsucesso = document.querySelector('.mensagem-sucesso');
    containermensagemsucesso.innerHTML =mensagemsucesso;
    containermensagemsucesso.style.display = 'block';

    nomedestinatario.value = ' ';
    valordeposito.value = ' ';
    numerodaconta.value = ' ';
    
} else {
    nomedestinatario.style.border = '1px solid red'
   document.querySelector('.erro-menssagem').style.display = 'block';
}

    })

nomedestinatario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEvalido = validanome(e.target.value)

    if (!formEvalido) {
        nomedestinatario.style.border = '1px solid red'
       document.querySelector('.erro-menssagem').style.display = 'block';
    } else{
        nomedestinatario.style = ' '
        document.querySelector('.erro-menssagem').style.display = 'none';
    }
});

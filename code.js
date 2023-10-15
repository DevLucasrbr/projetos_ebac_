$(document).ready(function() { 
    $('#imagens').slick({
        autoplay: true,
    });  

    $(".Menu-Hamburguer").click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cnpj').mask('00.000.000/0000-00');
    $('#cep').mask('00.000-000')
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cnpj: {
                required: true
            },
            sistema: {
                required: true
            },

        },
        messages: {
            nome: 'Por Favor, Digite Seu Nome'
            }
    })
    
})


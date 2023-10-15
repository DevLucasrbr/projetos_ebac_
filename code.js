$(document).ready(function() { 
    $('#imagens').slick({
        autoplay: true,
    });  

    $(".Menu-Hamburguer").click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cnpj').mask('00.000.000/0000-00');
    
    
})


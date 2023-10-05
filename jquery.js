$(document).ready(function() {
    $('#container').submit(function(e) {
        e.preventDefault();
        var name= $("#text-input").val();
        if(name.trim() !== "") {
            $("#task-list").append("<li>" + name + "</li>");
            $("#text-input").val(""); // limpa o campo
        }
    });

    // marcação de linha
    $("#task-list").on('click', 'li' , function() {
        $(this).toggleClass('completed') 
    });
});
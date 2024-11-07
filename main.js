$(document).ready(function(){
    $('header button').click (function(){
        $('form').slideDown();
    })
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#adicionar-nova-tarefa').val();
        console.log(novaTarefa);
        const novoItem = $('<li></li>').text(novaTarefa);
      
        $(novoItem).on('click', function(e) {
            $(this).toggleClass('riscado')
        })
        $('ul').append(novoItem);
        $('#adicionar-nova-tarefa').val('');
    })
  
})
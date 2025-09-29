$(document).ready(function(){

    let classe = 0; 

    function contarAtividades() {
        let completas = 0;
        let incompletas = 0;

        $('tbody img').each(function(){
            const imgSrc = $(this).attr('src');
            if (imgSrc.includes('verificado.png')) {
                completas++;
            } else if (imgSrc.includes('ampulheta.png')){
                incompletas++;
            }
        });

        $('#tarefa-espera').text(incompletas);
        $('#tarefa-completa').text(completas)
    }

    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeAtividadeNova = $('#atividade-nova').val();

        if (nomeAtividadeNova.trim() === '') {
            alert('Por favor, digite o nome da atividade.');
            return;
        }
        classe++;
        const atividadeNova = $('<tr style="display : none"></tr>'); 

        $(`<td><p class="tarefa-item tarefa-lista-${classe}">${nomeAtividadeNova}</p></td>`).appendTo(atividadeNova);

        $('<td><img src="./img/ampulheta.png" alt="ampulheta"></td>').appendTo(atividadeNova);

        $(atividadeNova).appendTo('tbody');
        $(atividadeNova).fadeIn(function(){
            contarAtividades();
        });

        $('#atividade-nova').val('');
    });

    $('tbody').on('click', '.tarefa-item', function(){
        $(this).css({
            "text-decoration": "line-through", 
            "color": "#999" 
        });
        $(this).closest('tr').find('img').attr('src', './img/verificado.png');
        $(this).fadeIn(200);
    });
        const $imagemStatus = $(this).closest('tr').find('img');

        if (!$imagemStatus.attr('src').includes('verificado.png')) {
            $imagemStatus.fadeOut(200, function() { 
                $(this).attr('src', './img/verificado.png'); 
                $(this).fadeIn(200, function() {
                    contarAtividades(); 
                });
            });
        }
    });

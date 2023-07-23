$(document).ready(function() {
    // Agregamos un evento click a los botones del acordeón
    $('.accordion-button').on('click', function() {
        // Cerramos la pregunta anteriormente abierta
        $('.accordion-body').slideUp();
        $('.accordion-button').css('color', 'blue');

        // Mostramos la respuesta de la pregunta seleccionada y cambiamos el color del enlace
        var $accordionBody = $(this).parent().next('.accordion-collapse').find('.accordion-body');
        $accordionBody.slideDown();
        $(this).css('color', 'red');
    });

    // Cerramos todas las respuestas al principio (excepto la primera)
    $('.accordion-body').hide();
    $('.accordion-button').first().css('color', 'red');
    $('.accordion-body').first().slideDown();
});
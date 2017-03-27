$(document).ready(function() {
    $.ajax({
    	type: "GET",
    	url: "texto.txt",
      //cache : false

    }).done(function( text ) {

	$("#segundo").html(text);
    });

    $("#segundo").click(function(){
       $.ajax({
           type: "GET",
           url: "texto2.txt",
        //   cache: false
       }).done(function( text ) {
           $("#tercero").html(text);
       });
     });
     $("#tercero").click(function(){
        var respuesta = $.ajax({
            type: "GET",
            url: "texto3.txt",
          //  cache: false

        });
        respuesta.done(function( text ) {
              $("#cuarto").html(text);
          });
        respuesta.fail(function( text ) {
              $("#cuarto").html("Error al cargar el texto, texto no encontrado.");
              });
      });

});

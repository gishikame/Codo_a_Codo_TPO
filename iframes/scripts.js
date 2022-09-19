$(document).ready(function(){ 
   $("#capa1").html('aún no has pulsado');
   $("#celda1").click(function(){
      texto1=$("#celda1").html();
      $("#capa1").html(texto1);
   });
   $("#celda2").click(function(){
      texto2=$("#celda2").html();
      $("#capa1").html(texto2);
   });
   $("#celda3").click(function(){
      texto3=$("#celda3").html();
      $("#capa1").html(texto3);
   });
});
function enviar(){
    var url = document.getElementById("url").value;
    var ancho = document.getElementById("ancho").value;
    var alto = document.getElementById("alto").value;

    $("#contenedor").empty();
    $("#contenedor").append('<object id="obj" type="text/html" data="'+ url +'" width="'+ ancho +'" height="'+ alto +'"></object>');
    
}
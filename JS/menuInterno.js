$(document).ready(function() {
	llenarCategorias();	
});

function llenarCategorias() {
	$.ajax({
		type: "POST",
		url: "../../aplicacion.php",

		data: ({
			funcion : "llenarCategorias"
		}),
		dataType: "html",
		success: function (msg) {
			$("#listaCategorias").html(msg);
			//var e = prompt("", msg);
		}
	});
}

$(document).on("click", ".categorias", function(){
    var id = $(this).attr("value");
    $.ajax({
        url:"aplicacion.php",
        type: "POST",
        data:({
            funcion: "verEmpresasCategoria",
            id: id
        }),
    })
    .done(function(msg){
    	$("#mostrarEmpresas").html(msg)
    })
    .fail(function(){
        alert(msg);
    });
});
$(document).ready(function() {
	llenarCategorias();	
	topDiez();
});

function llenarCategorias() {
	$.ajax({
		type: "POST",
		url: "aplicacion.php",

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

function topDiez(){
	$.ajax({
		type: "POST",
		url: "aplicacion.php",
		data: ({
			funcion : "topDiez"
		}),
		dataType: "html",
		success: function (msg) {
			$("#topDiez").html(msg);
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

$(document).on("click", ".empresas, .topEmpresas", function(){
    var id = $(this).attr("idEmpresa");
    $.ajax({
        url:"aplicacion.php",
        type: "POST",
        data:({
            funcion: "verDetallesEmpresa",
            id: id
        }),
    })
    .done(function(msg){    	
    	$("#modalDetalles").modal("show"); 
    	$("#realizarPedido").attr('idEmpresa', id);
        $("#verUbicacion").attr('idEmpresa', id); 	    	
    	$("#datos_detalle").html(msg)
    })
    .fail(function(){
        alert(msg);
    });
});

$(document).on("click", "#realizarPedido", function(){
    var idEmpresa = $(this).attr("idEmpresa");
    $.ajax({
        url:"../Aplicacion/Pedidos/pedidos.php",
        type: "POST",
        data:({
            funcion: "verEmp",
            idEmpresa: idEmpresa
        }),
    })
    .done(function(msg){  
    	window.open('../Aplicacion/Pedidos/index.php?idEmpresa='+idEmpresa,'_blank');
    	//window.location.reload(false);
    })
    .fail(function(){
        alert(msg);
    });

});

$(document).on('click', '#verUbicacion', function() {
    var idEmpresa = $(this).attr("idEmpresa");
    window.open('../Aplicacion/indexUbicacion.php?idEmpresa='+idEmpresa,'_blank');
});

    
    $(".imagenproducto").change(function() {
        var file = this.files[0];
        var imagefile = file.type;
        var match= ["image/jpeg","image/png","image/jpg"];
        if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2]))){
            alert('Porfavor seleccione un archivo valido (JPEG/JPG/PNG).');
            $(".imagenproducto").val('');
            $(".imagenproducto").focus();
            return false;
        }
    });

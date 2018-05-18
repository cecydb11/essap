<!DOCTYPE html>
<html>
  <head>
    <title>Inicio</title>
    <link rel="stylesheet" href="Bootstrap/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="CSS/aplicacion.css">
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <img src="Imagenes/logo.png" width="5%"><br>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="Aplicacion/login">Iniciar Sesión</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Perfil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Registra tu empresa</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorías
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="listaCategorias">
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cerrar Sesión</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9" id="mostrarEmpresas">
          
        </div>

         <div class="col-md-3" id="topDiez">
          
        </div>
      </div>
    </div>

    <div class="modal fade" id="modalDetalles" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Detalles</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            
          </div>
              <div class="modal-body">
                <div class="container-fluid">
                    <div id="datos_detalle"></div>
                </div>
             </div> 
          <div class="modal-footer">
            <button type="button" id="realizarPedido" idEmpresa = "" class="btn btn-primary">Realizar pedido</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="JS/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="JS/Aplicacion.js"></script>
  </body>
</html>
<!-- Abre un contenedor para un modal de mensajes del sistema -->
<div class="modal" id="mensajeSistema" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Encabezado del modal con un título y un botón para cerrar -->
            <div class="modal-header">
                <h5 class="modal-title">Mensaje del Sistema</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- Cuerpo del modal, donde se mostrará el contenido del mensaje -->
            <div class="modal-body contenidoSistema">
            </div>
            <!-- Pie del modal con un botón para cerrar el modal -->
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<!-- Scripts externos para funcionalidades adicionales -->

<!-- Script para Bootstrap (minificado y combinado) desde un CDN con integridad del contenido -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<!-- Script para jQuery (versión 2.1.1) desde el CDN de Google -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<!-- Script para jQuery (versión 3.6.0) desde el CDN de jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- Script para DataTables (minificado) desde un CDN -->
<script src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.min.js"></script>
<!-- Script para Popper.js (minificado) desde un CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<!-- Script para Bootstrap 4 (minificado) desde un CDN -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<!-- Script para Select2 (minificado) desde un CDN -->
<script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>


<!-- Script personalizado si está definido en la variable $this->js -->
<?php if(isset($this->loginJS)){?>  
    <script src="<?= URLSYS.$this->loginJS ?>"></script>
<?php } ?>
<?php if(isset($this->js)){?>  
      <script src="<?= URLSYS.$this->js ?>"></script>
      <?php } ?>
</body>
</html>

 $(document).ready(function() {
      var miTabla= $('#tabla').DataTable({
           
		   'processing': true,
           'serverSide': true,
           'ajax': 'php/cargar_alumnos1.php'
       });
  });
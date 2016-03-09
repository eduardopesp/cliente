 $(document).ready(function() {
      var miTabla= $('#tabla').DataTable({       
		   'processing': true,
           'serverSide': true,
           'ajax': 'php/cargar_alumnos_mejorado.php',
           "order":[[5,"desc"],[4,"desc"]],//ordena por la columna 5 y despues por la 4
           "columnDefs": [ 
            {
                "targets": [ 3 ], //la columna 3 no se verá y no se buscará por ella
                "searchable": false
            }
        ],
        'columns': [{
               'data': 'id_alumno'
           }, {
               'data': 'matricula'
           }, {
               'data': 'nombre'
           }, {
               'data': 'apellido1'
           }, {
               'data': 'apellido2'
           }, {
               'data': 'nota_cliente'
           }, {
               'data': 'nota_x'
           }]
       });
  });
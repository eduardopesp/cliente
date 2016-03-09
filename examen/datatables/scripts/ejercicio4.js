   //'use strict';
   $(document).ready(function() {
       var miTabla = $('#tabla').DataTable({

           'processing': true,
           'serverSide': true,
           'ajax': 'php/cargar_alumnos_mejorado.php',
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
           }, {
               'data': 'id_alumno',
               'render': function(data) {
                   /*Boton para editar el doctor*/
                   return '<button><a class="editarbtn" >Editar</a></button>';
               }

               //RENDERIZA LOS BOTONES



           }]


       });

       //función en la que rellenamos los datos del formulario con los datos de la fila en la que hemos pulsado el botón
       $('#tabla').on('click', '.editarbtn', function(e) {

           //..................
           e.preventDefault();
           $('#tabla').fadeOut(100);
           $('#formulario').fadeIn(100);
           var nRow = $(this).parents('tr')[0];
           var aData = miTabla.row(nRow).data();
           $('#id_alumno').val(aData.id_alumno);
           $('#matricula').val(aData.matricula);
           $('#nombre').val(aData.nombre);
           $('#apellido1').val(aData.apellido1);
           $('#apellido2').val(aData.apellido2);
           $('#notaCliente').val(aData.nota_cliente);
           $('#notaX').val(aData.nota_x);
       });


       //Actualiza la base de datos y la tabla:
       //Recoged los datos del formulario y enviarlos vía ajax a la base de datos.
       //El archivo que lo trata´ra es php/modificar_alumno.php
       $('#enviar').click(function(e) {
           e.preventDefault();
           //..........
           id = $('#id_alumno').val();
           matricula = $('#matricula').val();
           apellido1 = $('#apellido1').val();
           apellido2 = $('#apellido2').val();
           nombre = $('#nombre').val();
           nota_cliente = $('#notaCliente').val();
           nota_x = $('#notaX').val();
           //alert(id + matricula + apellido1 + apellido2+ nombre + nota_cliente + nota_x);
           $.ajax({
               type: 'POST',
               dataType: 'json',
               url: 'php/modificar_alumno.php',
               data: { //datos q enviamos
                   id_alumno: id,
                   matricula: matricula,
                   apellido1: apellido1,
                   apellido2: apellido2,
                   nombre: nombre,
                   nota_cliente: nota_cliente,
                   nota_x: nota_x
                       //.......
               },
               error: function(xhr, status, error) {
                   //NO HAGAIS NADA
               },
               success: function(data) {
                   //actualizar la tabla
                   var $mitabla = $("#tabla").dataTable({ bRetrieve: true });
                   // y volvemos a mostrar el resultado
                   $mitabla.fnDraw();
               },
               complete: {
                   //NO HAGAIS NADA
               }
           });

           $('#formulario').fadeOut(100);
           $('#tabla').fadeIn(100);


       })


   });

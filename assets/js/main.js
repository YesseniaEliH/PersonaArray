var datos = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
{ nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
{ nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
{ nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];

function imprimirDatos(){
  var m = document.getElementById("mostrar");
    datos.forEach(function(elemento){
      m.innerHTML += "<div><ul><li> " + "Nombre: " + elemento.nombre+ "</li>"+
                      "<li> " + "Apellido: " + elemento.apellido+ "</li>" +
                      "<li> " + "Rol: " +  elemento.rol+ "</li>" +
                      "<li> " + "Cumpleaños: " + elemento.cumpleanios+ "</li></ul></div>"
    });

}

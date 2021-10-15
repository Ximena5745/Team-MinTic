function abrir(){
   document.getElementById('vent').style.display="block";
}

function cerrar(){
   document.getElementById('vent').style.display="none";
}

function recibir(){
   var valor = document.getElementById("rol_sis").value;
   if(valor != "" ){
      alert("Se ha hecho un cambio en el rol del sistema");
   }else{
      alert("Ningun cambio en el rol del sistema");
   }
} 

function aceptar(){
   var mensaje = confirm("¿Desea guardar estos cambios?");
   if (mensaje) {
      alert("Cambios guardados");
   }else{
      alert("Cambios no guardados");
   }
}

function eliminar(){
   var mensaje = confirm("¿Desea eliminar este registro?");
   if (mensaje) {
      alert("Registro eliminado");
   }else{
      alert("No se hicieron cambios");
   }
}

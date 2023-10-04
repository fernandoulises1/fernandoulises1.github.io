 


 x = 5 ;
// comentario
 
var miNombre = "Fernando" ; 
console.log (x);

function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    var horaImprimible = hora + " : " + minuto + " : " + segundo
    document.form_reloj.reloj.value = horaImprimible
    setTimeout("mueveReloj()",1000) ;
}



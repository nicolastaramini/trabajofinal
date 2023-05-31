var nombre = prompt("¿ COMO TE LLAMAS ?");
var edad = prompt("¿ CUANTOS AÑOS TIENES ?")


function variavilidad(edad) {
    
if(edad >=18){
    alert( nombre+ " " +"¡¡ USTED ES MAYOR DE EDAD !!")
}
else{
   alert( nombre + " " +"¡¡ USTED NO ES MAYOR DE EDAD ENTRA BAJO SU PROPIA RESPONSA!! ")
}}

variavilidad(edad)


var distancia = confirm("¿ VIVIS A MENOS DE 40KM DE SAN NICOLAS ?");

function Distancia (distancia){
    if(distancia == true) {
        alert( nombre+ " " +" ¡¡ TU ENVIO ES GRATIS !!");
    } else {
        alert( nombre+ " " +" ¡¡ TU ENVIO TE SALE $800 !!");
    }
}


Distancia(distancia);
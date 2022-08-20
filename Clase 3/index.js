let nombre = prompt("Ingrese su nombre (o escriba END para salir)").toLowerCase();
let e = 0

if(nombre === "") {
    do{
        alert("No ha ingresado ningún nombre");
        nombre = prompt("Ingrese su nombre").toLowerCase();
    }while(nombre === "")
}else{
    while(e < 4){
        switch(nombre){
            case "julio":
                let edad = parseInt(prompt("Ingrese su edad"));
                if((edad >= 1) && (edad <= 100)){
                    alert(`Bienvenido ${nombre}, tu edad es: ${edad}`);
                }else if(edad < 1){
                    for(i = 0; i <= 3; i++){
                        let intentos = (3 - i);
                        alert(`El valor de su edad no es válida, tienes ${intentos} intentos más`);
                        edad = parseInt(prompt("Ingrese su edad"));
                    }
                    alert("No tienes más oportunidades");
                }else{
                    alert(`Hola ${nombre}, Vaya!!! ${edad} años!!!, creo que estás algo viejo`);
                }
                e = 4;
                break;
            case "end":
                alert("Hasta luego");
                e = 4;
                break;
            default:
                alert("Usted no está autorizado");
                let errar = (3 - e);
                nombre = prompt(`Ingrese su nombre, tienes ${errar} intentos más`).toLowerCase();
                e++;
        }
    }
}
alert("FIN! Para volver a comenzar recarque la página");
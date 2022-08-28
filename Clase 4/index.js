function Usuario(userData) {
    this.nombre = userData.nombre;
    this.edad = userData.edad;
    this.email = userData.email;
    this.password = userData.password;
}

class Producto {
    constructor (item, precio, imagen) {
        this.item = item;
        this.precio = precio;
        this.imagen = imagen;
        this.vendido = false;
    }
    sale () {
        this.vendido = true;
    }
}

const menu1 = () => {
    let opcion = prompt("Ingrese 1 para ingresar o 2 para registrarse, END para salir");
    while(opcion !== "end") {
        switch(opcion){
            case "1":
                logIn ();
                break;
            case "2":
                newUser ();
                break;
            case "end":
                alert("Hasta luego");
                break;
            default:
                alert("Ingrese una opción válida");
                opcion = prompt("Ingrese 1 para ingresar o 2 para registrarse, END para salir");
        }
    }
};

const menu2 = () => {
    let select = prompt("Ingrese 1 para ingresar producto nuevo o 2 para consultar, END para salir");
    while(select !== "end") {
        switch(select){
            case "1":
                carga ();
                break;
            case "2":
                stock ();
                break;
            case "end":
                alert("Hasta luego");
                opcion = "end";
                break;
            default:
                alert("Ingrese una opción válida");
                select = prompt("Ingrese 1 para ingresar producto nuevo o 2 para consultar, END para salir");
        }
    }
};

const carga = () => {};

const stock = () => {};

let validacion = (a, b) => {if (a === b) {return true;}else {return false;}};

const admin = new Usuario ({ nombre: "julio", edad: 38, email: "jftripel@gmail.com", password: "admin1234" });

const logIn = () => {
    let nombre = prompt("Ingrese su nombre o escriba END para salir").toLowerCase();
    if(nombre === "") {
        do {
            alert("No ha ingresado ningún nombre");
            nombre = prompt("Ingrese su nombre").toLowerCase();
        }while(nombre === "")
    }else if(nombre === "end") {
        alert("Hasta luego");
        opcion = nombre;
    }else {
        let e = 0;
        while(e < 4) {
            if(nombre === admin.nombre) {
                let password = prompt("Ingrese su contraseña").toLowerCase();
                for (i = 0; i < 3; i++) {
                    if (validacion (password, admin.password) === true) {
                        i = 3;
                        alert(`Hola ${nombre}, bienvenido devuelta`);
                        menu2 ();
                        opcion = "end";
                    }else {
                        alert(`La contraseña no coincide, vuelva a intentar (intentos: ${(3 - i)} )`);
                        password = prompt("Vuelva a ingresar su contraseña").toLowerCase();
                    }
                }
                e = 4;
            }else if(nombre === "end") {
                alert("Hasta luego");
                e = 4;
            }else {
                alert("No es un usuario válido");
                let errar = (3 - e);
                nombre = prompt(`Ingrese su nombre, tienes ${errar} intentos más`).toLowerCase();
                e++;
            }
            opcion = "end";
        }
    }
};

const newUser = () => {
    let nombre = prompt("Ingrese un nuevo nombre o escriba END para salir").toLowerCase();
    if(nombre === "") {
        do {
            alert("No ha ingresado ningún nombre");
            nombre = prompt("Ingrese un nombre").toLowerCase();
        }while(nombre === "")
    }else if(nombre === "end") {
        alert("Hasta luego");
        opcion = nombre;
    }else {
        let edad = parseInt(prompt("Ingrese su edad"));
        if((edad >= 18) && (edad <= 150)) {
            let email = prompt("Ingrese su dirección de e-mail").toLowerCase();
            let remail = prompt("Vuelva a ingrese su dirección de e-mail").toLowerCase();
            for (i = 0; i < 1; i) {
                if (validacion(email, remail) === true) {
                    i = 1;
                    let password = prompt("Ingrese una contraseña").toLowerCase();
                    let rpassword = prompt("Vuelva a ingresar su contraseña").toLowerCase();
                    for (i = 0; i < 3; i++) {
                        if (validacion (password, rpassword) === true) {
                            const user1 = new Usuario ({ nombre: nombre, edad: edad, email: email, password: password });
                            alert("Usuario creado ");
                            alert(`Su nombre es ${user1.nombre}, su edad ${user1.edad} años y su e-mail es ${user1.email}`);
                            i = 3;
                            opcion = "end";
                        }else {
                            alert(`Las contraseñas no coinciden, vuelva a intentar (intentos: ${(3 - i)} )`);
                            rpassword = prompt("Vuelva a ingresar su contraseña").toLowerCase();
                        }
                    }
                }else {
                    while (validacion (email, remail) === false) {
                        alert("Las direciones de e-mail no coinciden, vuelva a intentar");
                        remail = prompt("Vuelva a ingrese su dirección de e-mail").toLowerCase();
                    }
                }
            }
            opcion = "end";
        }else if (edad < 18) {
            alert("Usted es menor de edad y no puede crear un usuario");
            opcion = "end";
        }else {
            alert("El valor de su edad no es válida");
            opcion = "end";
        }
        
    }
};

alert("Bienvenido! Identifiquese");

menu1 ();

alert("FIN! Para volver a comenzar recargue la página");



class Producto {
    constructor (id, nombre, precio, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.status = true;
        this.vendido = false;
    }
    novedad () {
        this.status = false;
    }
    sale () {
        this.vendido = true;
    }
    show () {
        let div = document.createElement ("div");
        div.innerHTML = `
            <h2>ID: ${this.id}</h2>
            <p>Producto: ${this.nombre}</p>
            <p>Precio: <b>$${this.precio}</b></p>
        `;
        contenedor.append(div);
    }
}

const stock = [];
const ids = stock.map (item => {
    return {
        id: item.id,
    }
});

let select = "";
let contenedor = document.getElementById ("contenedor");

const carga = () => {
    do {
        let nombre = prompt(`Ingrese el nombre del producto`).toLowerCase();
        let precio = parseFloat(prompt(`Ingrese el precio del producto`));
        let descripcion = prompt(`Ingrese una breve descripcion del producto`).toLowerCase();
        let imagen = prompt(`cargue una imagen del producto`);
        let id = (Math.max(0,...ids)) + 1;
        const nuevoProducto = new Producto (id, nombre, precio, descripcion, imagen);
        stock.push(nuevoProducto);
        ids.push(id);
        /* nuevoProducto.show(); */
        menu ();
        select = "end";
    }while(select === 1);
};

const consultaStock = () => {
        for (let producto of stock) {
            producto.show();
        }
        select = "end";
};


const menu = () => {
    select = prompt(`
        Seleccione una opción para continuar 
        1 - Ingresar producto nuevo 
        2 - Consultas 
        END - Salir
    `);
    while(select !== "end") {
        switch(select){
            case "1":
                carga ();
                break;
            case "2":
                consultaStock ();
                break;
            case "end":
                alert("Hasta luego");
                opcion = "end";
                break;
            default:
                alert("Ingrese una opción válida");
                select = prompt(`
                Seleccione una opción para continuar 
                1 - Ingresar producto nuevo 
                2 - Consultas 
                END - Salir
            `);
        }
    }
};



alert("Bienvenido!");

menu ();

alert("FIN! Para volver a comenzar recargue la página");


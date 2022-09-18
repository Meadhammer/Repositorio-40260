//Creación de producto
class Producto {
    constructor (id, nombre, precio, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.status = true;
        this.vendido = false;
        this.span = `
          <span class="badge rounded-pill text-bg-warning"> Nueva!!!</span>
          `;
    }
    noNovedad () {
        this.status = false;
        this.span =" ";
    }
    sold () {
        this.vendido = true;
    }
}

//Declaraciones

let stock = [];
let stockStored = JSON.parse(localStorage.getItem("stockStorage"));
if(stockStored){
  stock = stockStored;
};
const contenedor = document.getElementById ("contenedor");
const ficha = document.getElementById ("ficha");
const menuCarga = document.querySelector(".menuCarga");
const menuConsulta = document.querySelector(".menuConsulta");
let lastId = 1;
let iter = 0;
let uploaded_image = "";
console.log(stock);

//funciones de apoyo

function show (prod) {
  let article = document.createElement ("article");
  article.className = "col-12 col-lg-6 col-xxl-4";
  article.innerHTML = `
      <h4>ID: ${prod.id}</h4>
      <div class="card" style="width: 22rem;">
          <img src="${prod.imagen}" class="card-img-top" alt="pipa${prod.id}">
          <div class="card-body">
            <h5 class="card-title">${prod.nombre} ${prod.span}</h5>
            <p class="card-text">${prod.descripcion}.</p>
            <p class="card-text">Precio: <b>$${prod.precio}</b></p>
            <input type="button" value="Ver más" class="boton" data-bs-toggle="modal" data-bs-target="#mpipa${prod.id}">
                      <!-- Modal -->
                      <div class="modal fade" id="mpipa${prod.id}" tabindex="-1" aria-labelledby="mpipa${prod.id}Label" aria-hidden="true">
                          <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="mpipa${prod.id}Label">${prod.nombre}</h5>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                      <!-- inicio carrusel -->
                                      <div id="carousel001Indicators" class="carousel slide" data-bs-ride="true">
                                          <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carousel001Indicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carousel001Indicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carousel001Indicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                          </div>
                                          <div class="carousel-inner">
                                            <div class="carousel-item active">
                                              <img src="../pipes/img_pipe_pr_001_1.jpg" class="d-block w-100" alt="pipa${prod.id}_1">
                                            </div>
                                            <div class="carousel-item">
                                              <img src="../pipes/img_pipe_pr_001_2.jpg" class="d-block w-100" alt="pipa${prod.id}_2">
                                            </div>
                                            <div class="carousel-item">
                                              <img src="../pipes/img_pipe_pr_001_3.jpg" class="d-block w-100" alt="pipa${prod.id}_3">
                                            </div>
                                          </div>
                                          <button class="carousel-control-prev" type="button" data-bs-target="#carousel001Indicators" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                          </button>
                                          <button class="carousel-control-next" type="button" data-bs-target="#carousel001Indicators" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                          </button>
                                      </div>
                                      <!-- fin carrusel -->
                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!-- fin modal -->
          </div>
        </div>
  `;
  contenedor.append(article);
};

function recorrer (arr, func) {
  for (let item of arr) {
    func(item);
  };
};

function ids (item) {
  while (parseInt(item.id) >= lastId){
    lastId++;
  };
};

//Funciones operativas

function loadCarga(e) {
  e.preventDefault();
  ficha.innerHTML = "";
  contenedor.innerHTML = "";
  let div = document.createElement ("div");
  div.className = "container-lg";
  div.innerHTML = `
      <div class="row mb-3 g-3 align-items-center justify-content-center">
          <div class="col-12 col-sm-2 col-md-4 text-sm-end">
            <label for="Nombre" class="col-form-label">Nombre</label>
          </div>
          <div class="col-sm-8 col-md-4">
            <input type="text" id="Nombre" name="name" placeholder="Producto" class="form-control" aria-describedby="NameHelpInline">
          </div>
          <div class="col-4">
            <span id="NameHelpInline" class="form-text">
              Ingrese el nombre del producto
            </span>
          </div>
      </div>
      <div class="row mb-3 g-3 align-items-center justify-content-center">
          <div class="col-12 col-sm-2 col-md-4 text-sm-end">
            <label for="Precio" class="col-form-label">Precio</label>
          </div>
          <div class="col-sm-8 col-md-4">
            <input type="number" id="Precio" name="price" placeholder="Precio" class="form-control" aria-describedby="priceHelpInline">
          </div>
          <div class="col-4">
            <span id="priceHelpInline" class="form-text">
              Ingrese el precio
            </span>
          </div>
      </div>
      <div class="row mb-3 g-3 align-items-center justify-content-center">
          <div class="col-12 col-sm-2 col-md-4 text-sm-end">
            <label for="Descripcion" class="col-form-label">Descripción</label>
          </div>
          <div class="col-sm-8 col-md-4">
            <input type="text" id="Descripcion" name="itemDesc" placeholder="Descripción" class="form-control caja" aria-describedby="itemDescHelpInline">
          </div>
          <div class="col-4">
            <span id="itemDescHelpInline" class="form-text">
              Ingrese una descripción
            </span>
          </div>
      </div>
      <div class="row mb-3 g-3 align-items-center justify-content-center">
          <div class="col-12 col-sm-2 col-md-4 text-sm-end">
            <label for="imagen" class="col-form-label">Imagen</label>
          </div>
          <div class="col-sm-8 col-md-4">
            <input type="file" id="file-selector" name="image" placeholder="Imagen" class="form-control" aria-describedby="imageHelpInline" accept="image/jpg, image/jpeg, image/png">
          </div>
          <div class="col-4">
            <span id="imageHelpInline" class="form-text">
              Ingrese tres imagenes del preducto (1672x1254)
            </span>
          </div>
      </div>
      <div class="row m-0 pb-5 g-3 align-items-center justify-content-center">
          <div class="col-auto">
              <input type="submit" value="Aceptar" class="boton">
              <input type="reset" value="Borrar todo" class="boton">
          </div>
      </div>
  `;
  ficha.append(div);
  for (iter; iter<1; iter++) {
    carga();
  }
  menuCarga.removeEventListener("click", loadCarga);
};

const carga = () => {
    contenedor.innerHTML = "";
    let fileSelector = document.getElementById("file-selector");
    fileSelector.addEventListener('change', function(){
      const reader = new FileReader();
      reader.addEventListener ("load", () => {
        uploaded_image = reader.result;
      });
      reader.readAsDataURL(this.files[0]);
    });
    ficha.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(lastId);
      contenedor.innerHTML = "";
      let nombre = document.getElementById("Nombre").value;
      let precio = document.getElementById("Precio").value;
      let descripcion = document.getElementById("Descripcion").value;
      let imagen = `url(${uploaded_image})`;
      console.log(imagen);
      console.log(lastId);
      recorrer (stock, ids);
      console.log(lastId);
      let id = lastId;
      const nuevoProducto = new Producto (id, nombre, precio, descripcion, imagen);
      console.log(nuevoProducto);
      stock.push(nuevoProducto);
      localStorage.setItem("stockStorage", JSON.stringify(stock));
      show(nuevoProducto);
      console.log(lastId);
      console.log(stock);
    });
};

const consultaStock = () => {
    ficha.innerHTML = "";
    contenedor.innerHTML = "";
    recorrer (stock, show);
    menuCarga.addEventListener("click", loadCarga);
};

//Interfaz de usuario
menuCarga.addEventListener("click", loadCarga);

menuConsulta.onclick = consultaStock;
class NewProduct {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

function verificar() {
  const infoUsuarioStorage =
    JSON.parse(localStorage.getItem("infoUsuario")) || {};

  if (infoUsuarioStorage.nombre && infoUsuarioStorage.apellido) {
    titulo.innerText = `Hola ${infoUsuarioStorage.nombre} ${infoUsuarioStorage.apellido}, continua comprando`;
    div = document.getElementById("greet");
    div.style.display = "none";
  }
}

const time = async() => {
  const clientTime = await fetch('http://worldtimeapi.org/api/ip')
  const theTime = await clientTime.json()
}
// const showtime = document.getElementById("time");
// showtime.innerHTML = <spam>`${time}`</spam>

const formularioUsuario = document.getElementById("formulario");
const titulo = document.getElementById("title");
const nombreUsuario = document.getElementById("nombre");
const apellidoUsuario = document.getElementById("apellido");
const infoUsuario = {};

// crear datos
const productsArray = [];
const product1 = new NewProduct("P1", "Producto1", 100.0, 10);
productsArray.push(product1);
const product2 = new NewProduct("P2", "Producto2", 300.0, 10);
productsArray.push(product2);
const product3 = new NewProduct("P3", "Producto3", 50.0, 10);
productsArray.push(product3);
const product4 = new NewProduct("P4", "Producto4", 500.0, 10);
productsArray.push(product4);

//  dibujar datos
const divProducts = document.querySelector("#products");
productsArray.forEach((product) => {
  divProducts.innerHTML += `
  <div class="col-3">
    <div id="${product.id}" class="card" style="width: 18rem;">
    <img src="https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg?w=740&t=st=1666183184~exp=1666183784~hmac=ab2a0f8e74b11e28511ba75ad4c050615471b3fe308b36f3530250e55152d1cc" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">U$$${product.price}</p>
    <button id="${product.id}" class="btn btn-primary">AGREGAR</button>
    </div>
    </div>
  </div>  
    `;
});

const cart = [];
const buttonsAdd = document.querySelectorAll(".btn-primary");

buttonsAdd.forEach((button) => {
  button.onclick = () => {
    const productCart = productsArray.find((prod) => {
      return prod.id === button.id;
      
    });
    
    const indexCart = cart.findIndex((prod) => prod.id === productCart.id);

    if (indexCart === -1) {
      productCart.cantidad = 1;
      cart.push(productCart); // LO AGREGO
      const totalBuy = cart
      .map((prod) => prod.price * prod.cantidad)
      .reduce((elem1, elem2) => elem1 + elem2)
      Swal.fire({
        title: `Agregaste un  ${productCart.name} al carrito,  quieres seguir?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('¡Continua comprando!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire(`Tu total a pagar es de U$$${totalBuy}`,'', 'info')
        }
      })
    } else {
      cart[indexCart].cantidad += 1;
      // alert(`$$${productCart.price} ${cart[indexCart].cantidad}`);
      const totalBuy = cart
      .map((prod) => prod.price * prod.cantidad)
      .reduce((elem1, elem2) => elem1 + elem2)
      Swal.fire({
        title: `Agregaste un  ${productCart.name} al carrito,  quieres seguir?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('¡Continua comprando!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire(`Tu total a pagar es de U$$${totalBuy}`, '', 'info')
        }
      })
    }
    console.log(cart);
  };
});



formularioUsuario.onsubmit = (e) => {
  e.preventDefault();
  infoUsuario.nombre = nombreUsuario.value;
  infoUsuario.apellido = apellidoUsuario.value;
  localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario));

  verificar(); // #verificar cuando registres usuario;
};

verificar(); // #verificar cuando visites la pagina...



























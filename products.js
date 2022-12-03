
const formularioUsuario = document.getElementById('formulario')
const titulo = document.getElementById('title')
const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')
const infoUsuario = {}
formularioUsuario.onsubmit = (e) =>{
    e.preventDefault()
    infoUsuario.nombre = nombreUsuario.value
    infoUsuario.apellido = apellidoUsuario.value
    localStorage.setItem('infoUsuario',JSON.stringify(infoUsuario))
}
const infoUsuarioStorage = JSON.parse(localStorage.getItem('infoUsuario'))
console.log(infoUsuarioStorage)
if(infoUsuarioStorage.nombre !== "" || infoUsuarioStorage.apellido !== ""){
    titulo.innerText = `Hola ${infoUsuarioStorage.nombre} ${infoUsuarioStorage.apellido}, continua comprando`
    cerrar()
}
function cerrar() {
  div = document.getElementById('greet');
  div.style.display = 'none';
}

class NewProduct{
  constructor(id,name,price,stock){
    this.id = id
    this.name = name;
    this.price = price;
    this.stock = stock
  }
}
const productsArray =[]
const product1 = new NewProduct('P1', 'Producto1', 100.00, 10)
productsArray.push(product1)
const product2 = new NewProduct('P2', 'Producto2', 300.00, 10)
productsArray.push(product2)
const product3 = new NewProduct('P3', 'Producto3', 50.00, 10)
productsArray.push(product3)
const product4 = new NewProduct('P4', 'Producto4', 500.00, 10)
productsArray.push(product4)

const divProducts = document.querySelector('#products')
productsArray.forEach((product)=> {
  divProducts.innerHTML +=`&nbsp
  <div class="col-3">
    <div id="${product.id}" class="card" style="width: 18rem;">
    <img src="https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg?w=740&t=st=1666183184~exp=1666183784~hmac=ab2a0f8e74b11e28511ba75ad4c050615471b3fe308b36f3530250e55152d1cc" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">$${product.price}</p>
    <button id="${product.id}" class="btn btn-primary">AGREGAR</button>
    </div>
    </div>
  </div>  
    `
}) 

const cart = []
const buttonsAdd = document.querySelectorAll('.btn-primary')

buttonsAdd.forEach((button) => {
  button.onclick = () => {
    const product = productsArray.find(
      (prod) => prod.id === parseInt(button.id)
    )

    const productCart = {
      id: product.id,
      nombre: product.name,
      precio: product.price,
      cantidad: 1,
    }

    const indexCart = cart.findIndex((prod) => prod.id === product.id)

    if (indexCart === -1) {
      carrito.push(productCart)
      
    } else {
      cart[indexCart].cantidad += 1
      alert(`$$${product.price}`)
    }
    console.log(cart)
  }
})
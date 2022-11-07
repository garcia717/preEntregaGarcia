function logIn() {
let userName = prompt('¡Hola! Por favor ingresa tu nombre de usuario');
let password = parseInt(prompt(`¡Bienvenido ${userName}! Por favor ingresa tu contraseña, recuerda solo tienes 3 intentos`));
let trys = 0
let correct = false
if (password === 1234) {
    alert (`¡Maneja tu tienda ${userName}!`)
    purchase()
} else  if(password !== 1234){
    while (password !== 1234 && trys < 2){ 
        let attemp =parseInt(prompt(`Contraseña incorrecta ${userName}, intenta de nuevo`))
        if (attemp === 1234){
            correct = true
            alert (`¡Maneja tu tienda ${userName}!`)
            purchase()
            break
        } else {
            trys++
        }
}
if(trys === 2){
    alert(`Lamentamos que tengas problemas ${userName}, vuelve a intentarlo en 24 horas`)
}
}
}
function purchase(){
  let productSelector = prompt('Por favor selecciona tu producto, P1; P2; P3 o P4').toUpperCase()    
  let continueBuy = true
  let total = 0
  let desicion 
  const productsArray =[]
  const cart =[]
  class NewProduct{
      constructor(id,name,price,stock){
        this.id = id
        this.name = name;
        this.price = price;
        this.stock = stock
      }
    }
  const product1 = new NewProduct('P1', 'Producto1', 100.00, 10)
  productsArray.push(product1)
  const product2 = new NewProduct('P2', 'Producto2', 300.00, 10)
  productsArray.push(product2)
  const product3 = new NewProduct('P3', 'Producto3', 50.00, 10)
  productsArray.push(product3)
  const product4 = new NewProduct('P4', 'Producto4', 500.00, 10)
  productsArray.push(product4)
  while(continueBuy === true){
      const product = productsArray.find(prod=>prod.id===productSelector)
      cart.push(product)
      totalPurchase = product.price
      desicion = parseInt(prompt(`El total de tu compra es US$ ${totalPurchase}, ¿quieres seguir?`, '1=Si ó 2=No'))
      if(desicion === 1){
          productSelector = prompt('Por favor selecciona tu producto, P1; P2; P3 o P4').toUpperCase()
          total = total + cart.map(prod=>prod.price).reduce((a,b)=>a+b)
          console.log(cart);
      }else{
          continueBuy = false
          alert(`Tu total a pagar es US$ ${total+totalPurchase}`)
      }
     }
  }
    logIn()














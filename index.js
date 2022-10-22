function logIn() {
let userName = prompt('¡Hola! Por favor ingresa tu nombre de usuario');
let password = parseInt(prompt(`¡Bienvenido ${userName}! Por favor ingresa tu contraseña, recuerda solo tienes 3 intentos`));
let trys = 0
let correct = false
if (password === 1234) {
    alert (`¡Maneja tu tienda ${userName}!`)
} else  if(password !== 1234){
    while (password !== 1234 && trys < 2){ 
        let attemp = parseInt(prompt(`Contraseña incorrecta ${userName}, intenta de nuevo`))  
        if (attemp === 1234){
            correct = true
            alert (`¡Maneja tu tienda ${userName}!`)
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
logIn()




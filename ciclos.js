debugger

confirm ("Bienvenido a la tienda. Sólo se permite el ingreso a mayores de 16 años.")

let edad = " "
let ingreso = false

while (ingreso === false){
    edad = parseInt(prompt("Ingresá tu edad."))
    if (edad>15){
        console.log ("Ingreso autorizado.")
        ingreso = true
    }
    else {
        console.error ("Necesitás ser mayor de 16 años para ingresar.")
    }
}
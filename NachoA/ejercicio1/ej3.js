// Ejercicio 3 ↓

const userRegistrado = ("cuentanacho");
const passRegistrado = ("nachito123");



let login = false;

while(login == false){
    let user = prompt("Ingrese su usuario: ");
    let pass = prompt("Ingrese su contraseña");
    if (userRegistrado === user &&  passRegistrado === pass){
        alert("Ha iniciado sesion correctamente");
        login = true;
        }else { alert("Usuario o contraseña incorrectos. Intente nuevamente");
    }
}
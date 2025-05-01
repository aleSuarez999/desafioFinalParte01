 const errDesc = {}

errDesc["contactoName"] = "El nombre tiene que tener mas de 2 caracteres";
errDesc["contactoSurname"] = "El apellido tiene que tener mas de 2 caracteres";
errDesc["contactoEmail"] = "El mail no tiene formato valido";
errDesc["contactoNota"] = "La nota tiene que tener ser completa y detallada";

let showMenu = false;

const handleMenu = () => {
    const menu = document.getElementById("mobileBar")
    const main_container = document.getElementById("main_container")

    //alert(menu.style.display)
    if (!showMenu) {
        menu.style.visibility = "visible";
        menu.style.display = "initial";
        //main_container.style.display = "none";
    } else {
        menu.style.visibility = "hidden";
        menu.style.display = "none";
        
        //main_container.style.display = "initial";
        //menu.style.overflow = "scroll"
    }
    showMenu = !showMenu
}


const showError = (campo, show) => {
    //console.log(`${campo}_error`);
    elemento = document.getElementById(`${campo}_error`)
    if (show)
    {
        elemento.style.display = "block";
        elemento.innerText = errDesc[campo]; // muestro la descript 
    }
    else
        elemento.style.display = "none";
}

const validarEmail = (email) => {
    // Expresión regular para validar un correo electrónico
//    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}

const cleanError = (id1) => {
    document.getElementById(id1).className = "";
    document.getElementById(`${id1}-error`).className = "helper";
    document.getElementById(`${id1}-error`).innerText = "";
}

const setError = (id1, msg) => {
    document.getElementById(id1).className = "input-error";
    document.getElementById(`${id1}-error`).className = "helper-error";
    document.getElementById(`${id1}-error`).innerText = msg;
}
  
const validateStrLength = (string) => string.length >= 2 ? true:false;

const validateNumber = (number) =>{
    // si no es negativo esta ok
    if (validateInt(number) || validateFloat(number))
        return true
    return false
}

const validateInt = (number) => number && parseInt(number) > -1 ? true:false;
const validateFloat = (number) => number && parseFloat(number) > -1 ? true:false;


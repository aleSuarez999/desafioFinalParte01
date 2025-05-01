var respuestas = []
var product = {}
    

const validar = (campo, tipo) =>
{
    //campo es el id en texto
    let elemento
    //console.log("campo", campo)
    elemento = document.getElementById(campo)
    //console.log(elemento)
    //console.log("elemento.value-Z", elemento.value)
    if (tipo == "String")
    {
        result = validateStrLength(elemento.value)
        
        showError(elemento.name, !result)
    }
    if (tipo == "Number")
    {

    }    
    if (tipo == "Email")
    {
        result = validarEmail(elemento.value)
        showError(elemento.name, !result)
    }    
    product[campo] = elemento.value

    //console.log("valida", elemento.id , result)
    //console.log("product", product)
    respuestas.push(result) // acumulo respuestas

    return result
}

const validaForm = () =>{
    for (i = 0 ; i < respuestas.length; i++)
    {
        //console.log("niego respuesta", respuestas[i])
        if (!respuestas[i]) // si hay una falsa no sigo
            return false
    }
    return true
}


const handleSubmitContacto = (event) => {
    event.preventDefault();
    product = {} // para hacerlo generico, no es un producto
    let elemento;
    
    respuestas = []        
    // consultar respuestas si hay falsos
    // en product aparecen los que validaron

    
    campo = "contactoName"
    resultado = validar(campo, "String");
    
    //apellido no lo valido
    campo = "contactoSurname"
    product[campo] = document.getElementById(campo).value

    campo = "contactoEmail"
    resultado = validar(campo, "Email");
    
    campo = "contactoNota"
    resultado = validar(campo, "String");
    
    //console.log("verif respuestas", respuestas.length)
    if (validaForm())
    {
        console.log("respuestas final   ", respuestas)
        console.log("productos", product)
    }
}
const viewImage = () => {
    // pendiente
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

// valida el form

const handleSubmit = (event) => {
    event.preventDefault();
    let product = {}
    let elemento;
    valid = false;
    //  prodTitle  prodDesc prodPrice prodImage
        
    elemento = document.getElementById("prodNombre");
    product.prodNombre = elemento.value
    if (validateStrLength(product.prodNombre))
        cleanError("prodNombre");
    else
        setError("prodNombre", "El titulo debe tener mas de 2 caracteres")
    
    elemento = document.getElementById("prodDescCorta");
    product.prodDescCorta = elemento.value
    if (validateStrLength(product.prodDescCorta))
        cleanError("prodDescCorta");
    else
        setError("prodDescCorta", "La descripcion debe tener mas de 2 caracteres")

    elemento = document.getElementById("prodDescLarga");
    product.prodDescLarga = elemento.value
    if (validateStrLength(product.prodDescLarga))
        cleanError("prodDescLarga");
    else
        setError("prodDescLarga", "La descripcion debe tener mas de 2 caracteres")
    
        elemento = document.getElementById("prodMarca");
        product.prodMarca = elemento.value
        if (validateStrLength(product.prodMarca))
            cleanError("prodMarca");
        else
            setError("prodMarca", "La Marca debe tener mas de 2 caracteres")
        
    
    elemento = document.getElementById("prodPrice");
    product.prodPrice = elemento.value

    if (validateNumber(product.prodPrice))
        cleanError("prodPrice");
    else
        setError("prodPrice", "El precio debe ser un numero que no sea negativo")

        elemento = document.getElementById("prodStock");
        product.prodStock = elemento.value
    
        if (validateNumber(product.prodStock))
            cleanError("prodStock");
        else
            setError("prodStock", "El precio debe ser un numero que no sea negativo")
    

    elemento = document.getElementById("prodImage");
    product.prodImage = elemento.value


}

// vista previa
const input = document.getElementById('prodImage');

const previewPhoto = () => {
    const file = input.files;
    if (file) {
        const fileReader = new FileReader();
        const preview = document.getElementById('imgPreview');

fileReader.onload = function (event) {
            preview.setAttribute('src', event.target.result);
        }
        fileReader.readAsDataURL(file[0]);
    }
}
input.addEventListener("change", previewPhoto);


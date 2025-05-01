// valida el form

const handleSubmit = (event) => {
    event.preventDefault();
    let product = {}
    let elemento;
    valid = true;
    //  prodTitle  prodDesc prodPrice prodImage
        
    elemento = document.getElementById("prodNombre");
    product.prodNombre = elemento.value
    if (validateStrLength(product.prodNombre))
        cleanError("prodNombre");
    else
    {
        setError("prodNombre", "El titulo debe tener mas de 2 caracteres")
        valid = false
    }
        
    
    elemento = document.getElementById("prodDescCorta");
    product.prodDescCorta = elemento.value
    if (validateStrLength(product.prodDescCorta))
        cleanError("prodDescCorta");
    else
    {
        setError("prodDescCorta", "La descripcion debe tener mas de 2 caracteres")
        valid = false
    }

    elemento = document.getElementById("prodDescLarga");
    product.prodDescLarga = elemento.value
    if (validateStrLength(product.prodDescLarga))
        cleanError("prodDescLarga");
    else
    {
        setError("prodDescLarga", "La descripcion debe tener mas de 2 caracteres")
        valid = false
    }
    
    elemento = document.getElementById("prodMarca");
    product.prodMarca = elemento.value
    if (validateStrLength(product.prodMarca))
        cleanError("prodMarca");
    else
    {
        setError("prodMarca", "La Marca debe tener mas de 2 caracteres")
        valid = false
    }
        
    
    elemento = document.getElementById("prodPrice");
    product.prodPrice = elemento.value

    if (validateNumber(product.prodPrice))
        cleanError("prodPrice");
    else
    {
        setError("prodPrice", "El precio debe ser numerico y no puede ser negativo")
        valid = false
    }

    elemento = document.getElementById("prodStock");
    product.prodStock = elemento.value

    if (validateNumber(product.prodStock))
        cleanError("prodStock");
    else
    {
        setError("prodStock", "El stock debe ser numerico y no puede ser negativo")
        valid = false
    }


    elemento = document.getElementById("prodImage");
    product.prodImage = elemento.value

    if (valid == true)
    {
        console.log("Formulario valido")
    }
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



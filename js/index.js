
let showMenu = false;

const handleMenu = () => {
    const menu = document.getElementById("category-menu")
    const main_container = document.getElementById("main_container")

    //alert(menu.style.display)
    if (!showMenu) {
        menu.style.visibility = "visible";
        menu.style.display = "initial";
        main_container.style.display = "none";
    } else {
        menu.style.visibility = "hidden";
        menu.style.display = "none";
        
        main_container.style.display = "initial";
        //menu.style.overflow = "scroll"
    }
    showMenu = !showMenu
}


// cambio imagen
imgDestino = document.getElementById("imagenAmpliada");

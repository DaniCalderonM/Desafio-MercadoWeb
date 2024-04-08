$(document).ready(function () {
    // Creamos el arreglo productos vacio, para poder agregar(click) o quitar(dobleclick) productos
    // del modal 
    let productos = [];

    // Seleccionamos todos los elementos que tienen la clase producto, luego con forEach, iteramos
    // sobre todos los elementos seleccionados, la función recibe un argumento llamado producto, 
    // que representa cada uno de los elementos seleccionados. 
    document.querySelectorAll(".producto").forEach(producto => {
        // Agregamos un eventListener al elemento producto para el evento click
        producto.addEventListener('click', event => {
            // Llamado a la función agregarImagen, pasamos como argumento el objetivo del evento (event.target),
            // que hace referencia al elemento específico donde se produjo el evento, permitiendo que la función agregarImagen
            // maneje la imagen correspondiente al elemento clickeado.
            agregarImagen(event.target);
        });
    });

    // Creamos la funcion para agregar la/las imagen/es al arreglo de productos y actualizar el modal
    function agregarImagen(imagen) {
        // Verificamos si imagen es distinto de 0
        if (imagen !== 0) {
            // Con esta linea hacemos opaco el producto seleccionado
            imagen.style.opacity = "0.6";
            // Agregamos la imagen con el metodo push al arreglo productos si no está presente
            if (!productos.includes(imagen)) {
                productos.push(imagen);
                console.log("Producto seleccionado:", imagen.alt);
                // Llamamos a la funcion mostrarImagenes para mostrar las imágenes
                // seleccionadas en el modal
                mostrarImagenes();
            }
        }
    }

    // Seleccionamos todos los elementos que tienen la clase producto, luego con forEach, iteramos
    // sobre todos los elementos seleccionados, la función recibe un argumento llamado producto, 
    // que representa cada uno de los elementos seleccionados. 
    document.querySelectorAll(".producto").forEach(producto => {
        // Agregamos un eventListener al elemento producto para el evento dobleclick
        producto.addEventListener("dblclick", event => {
            // Creamos la variable imagen y la definimos con el objetivo del evento, que sera 
            // el elemento específico donde se produjo el evento
            const imagen = event.target;
            // Quitamos la opacidad del producto deseleccionado
            imagen.style.opacity = "1";
            // Quitamos la imagen del arreglo de seleccionados, aplicando el
            // metodo filter al arreglo productos (este metodo recorre el arreglo y nos genera uno nuevo,
            // cuyo nuevo valor es asignado nuevamente a productos)
            productos = productos.filter(producto => producto !== imagen);
            console.log("Producto deseleccionado:", imagen.alt);
            // Llamamos a la funcion mostrarImagenes que nos mostrara las imágenes en el modal
            mostrarImagenes();
        });
    });

    // Creamos la funcion para mostrar las imágenes seleccionadas en el modal
    function mostrarImagenes() {
        const modal = document.getElementById("modalBody");
        // Limpiamos el contenido anterior del modal
        modal.innerHTML = '';
        // Mostramos las imágenes seleccionadas en el modal
        // recorriendo el arreglo productos con un forEach
        productos.forEach(producto => {
            const imagen = document.createElement("img");
            imagen.src = producto.src;
            imagen.width = 150;
            imagen.height = 150;
            modal.appendChild(imagen);
        });
    };
});



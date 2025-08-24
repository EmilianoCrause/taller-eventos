document.addEventListener("DOMContentLoaded", function() {
    const btnSaludar = document.getElementById("btnSaludar");

    const contenedor = document.createElement('div');
    contenedor.style.padding = '5px';
    contenedor.style.backgroundColor = 'green';
    contenedor.style.display = 'inline-block';

    btnSaludar.parentNode.insertBefore(contenedor, btnSaludar);
    contenedor.appendChild(btnSaludar);

    btnSaludar.addEventListener("click", function(event) {
        event.stopPropagation();
        alert("¡Hola!");
    });

    contenedor.addEventListener('click', function(){
        alert('Hola! Soy el div');
    });
});

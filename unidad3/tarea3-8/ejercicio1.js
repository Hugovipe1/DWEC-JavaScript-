document.addEventListener("DOMContentLoaded", function() {
    let clave = this.getElementById("clave");
    let valor = this.getElementById("valor");
    let span = this.getElementById("span");
    this.getElementById("almacenar").addEventListener("click",function(){
        window.localStorage.setItem(`${clave.value}`,`${valor.value}`);
        span.innerHTML = "Clave y valor almacenado";
    });
    this.getElementById("recuperar").addEventListener("click",function(){
        let item = window.localStorage.getItem(`${clave.value}`);
        span.innerHTML = item;
    });
    this.getElementById("eliminar").addEventListener("click",function(){
        window.localStorage.removeItem(`${clave.value}`);
        span.innerHTML = "eliminado";
    });
    this.getElementById("eliminarTodos").addEventListener("click",function(){
        window.localStorage.clear();
        span.innerHTML = "LocalStorage eliminado";
    });
    this.getElementById("cookies").addEventListener("click",function(){
        const cookieValue = document.cookie.split('; ');

        span.innerHTML = cookieValue.length;
    });
});
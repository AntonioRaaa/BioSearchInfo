//barra de búsqueda

barra = document.getElementById("barrabusqueda");
inputBusqueda = document.getElementById("inputBusqueda");
cajadebusqueda = document.getElementById("cajadebusqueda");




//filtrado de busqueda

document.getElementById("inputBusqueda").addEventListener("keyup", buscador_interno);

function buscador_interno(){

    filter = inputBusqueda.value.toUpperCase();
    li = cajadebusqueda.getElementsByTagName("li");

    //recorriendo elementos a filtrat meidnate loa li

    for (i = 0; i < li.length; i++){
        
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            cajadebusqueda.style.display = "block";

            if (inputBusqueda.value === ""){
                cajadebusqueda.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }
    }

}



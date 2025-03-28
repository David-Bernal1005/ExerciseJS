
var arreglo = ["Paco",16,"Pedro",19];

function proximoEnFila (arreglo,elemento){
    arreglo.push(elemento);
    return arreglo.shift();
}

var elementoRemovido = proximoEnFila(arreglo,20);

console.log("Elemento removido: " , elementoRemovido)
console.log("Nuevo arreglo: ", arreglo)

    
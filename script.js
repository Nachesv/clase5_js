let carrito = 0;
let cantidadItems = 0;

if(confirm('Buen dia, desea realizar una compra?')){
    realizarCompra(0,0, true);
} else {
    alert('Que tenga un buen dia');
}

function realizarCompra(carrito, cantidadItems, sigaComprando){

let pedido;

if(sigaComprando == true){
    pedido = prompt('Tipee lo que quiera agregar al carrito\n -PS5: $99999\n -XBOX: $89999\n -Buzo HGS: $3700\n -Tipee CANCELAR para salir');
}

if(pedido != null){
    do {
        switch(pedido){
            case 'PS5':
                const ps5 = new Producto('PS5', 99999, 'Consola')
                sigaComprando = AgregarProducto(ps5.precio, carrito, cantidadItems)
                break;
            case 'XBOX':
                const xbox = new Producto('PS5', 89999, 'Consola')
                sigaComprando = AgregarProducto(xbox.precio, carrito, cantidadItems)
                break;
            case 'BUZO HGS':
                const buzo = new Producto('BUZO HGS', 3700, 'Merchandising')
                sigaComprando = AgregarProducto(buzo.precio, carrito, cantidadItems)
                break;
            case 'CANCELAR':
                sigaComprando = false
                break;
            default:
                pedido = prompt('Opcion invalida.\n Tipee lo que quiera agregar al carrito\n -PS5: $99999\n -XBOX: $89999\n -Buzo HGS: $3700\n -Tipee CANCELAR para salir');
        }
    }while (sigaComprando == true )
}
    alert('Que tenga un buen dia.\n Total: ' + carrito);
}

function Producto(nombre, precio, tipo){
    this.nombre = nombre;
    this.precio = precio;
    this.tipo   = tipo;
}


function AgregarProducto(precio, carrito, cantidadItems ){
    
    cantidadItems += 1
    carrito += precio;
    let sigaComprando = confirm(`Su carrito contiene ${cantidadItems} por un total de $${carrito}\n Desea continuar?`);
    

    if(sigaComprando == true){
        realizarCompra(carrito, cantidadItems, true);
    }else{
        
        realizarCompra(carrito, cantidadItems, false);
    }

}
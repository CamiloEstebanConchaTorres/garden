import fs from 'node:fs';
fs.readFile(import.meta.dirname+"/db/product.json", "utf-8", (err, data)=>{
    let json = JSON.parse(data);

    let contar = (tamano=0, nombreGama, array=[])=>{
        let productos = (json.products.length != tamano) ? json.products[tamano] : undefined;
        let gamaNuevo;
        try {
            gamaNuevo = `${(productos.gama != nombreGama) ? productos.name : undefined}`
        } catch (error) {
            gamaNuevo = undefined;
        }
        array.push(gamaNuevo)
        return (json.products.length == tamano) ? [...new Set(array)] : contar(tamano+1, "Frutales", array) ;
    } 
    console.log(contar());
})
// 15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

export const getOrnamentalProductsOver100Units = async () => {
    try {
        let res = await fetch("http://localhost:5503/gama");
        let data = await res.json();
        let filteredProducts = data.filter(product => {
            return product.gama === "Ornamentales" && product.stock > 100;
        });
        filteredProducts.sort((a, b) => b.precio_venta - a.precio_venta);
        if (filteredProducts.length === 0) {
            return "No se encontraron productos que cumplan con los criterios especificados.";
        } else {
            return filteredProducts;
        }
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return [];
    }
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.


export const getProductRanges = async () => {
    try {
        let res = await fetch("http://localhost:5509/gama");
        let ranges = await res.json();
        return ranges;
    } catch (error) {
        console.error("Error al obtener los datos de las gamas de productos:", error);
        return [];
    }
}
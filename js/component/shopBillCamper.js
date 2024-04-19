export const getAllProductBIll = async() =>{
    let conexion = await fetch("http://localhost:5600/camper");
    let data = await conexion.json();
    return data;
}
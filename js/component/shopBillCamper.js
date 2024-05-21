export const getAllProductBIll = async() =>{
    let conexion = await fetch("http://172.16.101.146:5600/camper");
    let data = await conexion.json();
    return data;
}
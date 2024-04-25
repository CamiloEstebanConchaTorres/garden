

//1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas./

export const getAllOficcesCOdeAndCity = async  () => {
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            codigo: val.code_office,
            ciudad: val.city
        })
    });
    return dataUpdate;
    }

//2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España./

  export const getAllOficcesFromSpainCityAndMovil = async () => {
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            ciudad: val.city,
            telefono: val.movil
        })
    });
    return dataUpdate;
  }


// SEGUNDA PARTE ////////////////////////////////////////////////
// EJERCICIO 7 DE SEGUNDA PARTE //////////////////////////////////////////////////////////////


export const getOfficesByCode = async(code) =>{
    let res = await fetch(`http://localhost:5504/offices?code_office=${code}`);
    let dataClients = await res.json();
    return dataClients;
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
// 5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
// 6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.

export const getOffices = async () => {
    let res = await fetch("http://localhost:5504/offices");
    let offices = await res.json();
    return offices;
}

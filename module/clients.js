//6. Devuelve un listado con el nombre de los todos los clientes españoles.

export const getAllClientSpanishPeople = async  () => {
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            Name: val.client_name,
        })
    });
    return dataUpdate;
    }

// 16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.

export const getClientsInMadridWithSalesRepresentatives = async () => {
    try {
        let res = await fetch("http://localhost:5501/clients");
        let data = await res.json();
        let filteredClients = data.filter(client => {
            return client.city === "Madrid" && (client.code_employee_sales_manager === 11 || client.code_employee_sales_manager === 30);
        }).map(client => {
            return {
                client_name: client.client_name,
                city: client.city,
                code_employee_sales_manager: client.code_employee_sales_manager
            };
        });
        if (filteredClients.length === 0) {
            return "No se encontraron clientes que cumplan con los criterios especificados.";
        } else {
            return filteredClients;
        }
    } catch (error) {
        console.error("Error al obtener los clientes:", error);
        return [];
    }
}


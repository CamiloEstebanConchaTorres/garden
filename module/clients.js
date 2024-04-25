
// IMPORTACIONES PARA EL EJERCICIO 07, EJECICIO 01, EJERCICIO 02, 
// EJERCICIO 03, EJERCICIO 04, EJERCICIO 05, EJERCICIO 06 DE LA SEGUNDA PARTE/////
import { 
    getEmployByCode,
    getEmployees
} from "./employees.js";

import { 
    getOfficesByCode,
    getOffices,

} from "./offices.js";

import { 
    getPayments,
    getUnpaidClients
} from "./payments.js";
/////////////////////////////////////////////////////////////////


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

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 7. Devuelve el nombre de los clientes y el nombre de sus representantes 
// junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientsEmploy = async() =>{
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1:address1Client,
            address2:address2Client,
            city,
            region:regionClients,
            country:countryClients,
            postal_code:postal_codeClients,
            limit_credit,
            id:idClients,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            extension,
            email,
            code_boss,
            position,
            id:idEmploy,
            name,
            lastname1,
            lastname2,
            employee_code,
            ...employUpdate
        } = employ

        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country:countryOffice,
            region:regionOffice,
            postal_code:postal_codeOffice,
            movil,
            address1:address1Office,
            address2:address2Office,
            id:idOffice,
            ...officeUpdate
        } = office


        let data = {...clientsUpdate, ...employUpdate, ...officeUpdate};
        let {
            code_employee_sales_manager,
            code_office,
            ...dataUpdate       
        }=data;

        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`
        clients[i] = dataUpdate
    }
    return clients;
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

export const getClientSalesRepresentatives = async () => {
    let resClients = await fetch("http://localhost:5501/clients");
    let clients = await resClients.json();
    let employees = await getEmployees();
    let clientSalesRepresentatives = [];
    for (let client of clients) {
        let representative = employees.find(emp => emp.employee_code === client.code_employee_sales_manager);
        let clientData = {
            client_name: client.client_name,
            sales_representative: `${representative.name} ${representative.lastname1} ${representative.lastname2}`
        };
        clientSalesRepresentatives.push(clientData);
    }
    return clientSalesRepresentatives;
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getClientsWithSalesRepresentativesAndPayments = async () => {
    let resClients = await fetch("http://localhost:5501/clients");
    let clients = await resClients.json();
    let payments = await getPayments();
    let employees = await getEmployees();
    let clientsWithSalesRepresentativesAndPayments = [];
    let processedClients = new Set();
    for (let payment of payments) {
        let client = clients.find(cli => cli.client_code === payment.code_client);
        if (client && !processedClients.has(client.client_code)) {
            let representative = employees.find(emp => emp.employee_code === client.code_employee_sales_manager);
            let clientData = {
                client_name: client.client_name,
                sales_representative: `${representative.name} ${representative.lastname1} ${representative.lastname2}`
            };
            clientsWithSalesRepresentativesAndPayments.push(clientData);
            processedClients.add(client.client_code);
        }
    }
    return clientsWithSalesRepresentativesAndPayments;
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getClientsWithoutPaymentsAndSalesRepresentatives = async () => {
    let resClients = await fetch("http://localhost:5501/clients");
    let clients = await resClients.json();
    let unpaidClients = await getUnpaidClients(); 
    let employees = await getEmployees();
    let clientsWithoutPaymentsAndSalesRepresentatives = [];
    let processedClients = new Set();
    clients.forEach(client => processedClients.add(client.client_code));
    for (let payment of unpaidClients) {
        processedClients.delete(payment.code_client);
    }
    for (let client of clients) {
        if (processedClients.has(client.client_code)) {
            let representative = employees.find(emp => emp.employee_code === client.code_employee_sales_manager);
            let clientData = {
                client_name: client.client_name,
                sales_representative: `${representative.name} ${representative.lastname1} ${representative.lastname2}`
            };
            clientsWithoutPaymentsAndSalesRepresentatives.push(clientData);
        }
    }
    return clientsWithoutPaymentsAndSalesRepresentatives;
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientsWithPaymentsAndRepresentativesAndOffices = async () => {
    let resClients = await fetch("http://localhost:5501/clients");
    let clients = await resClients.json();
    let payments = await getPayments();
    let employees = await getEmployees();
    let offices = await getOffices();
    let clientsWithPaymentsAndRepresentativesAndOffices = [];
    for (let payment of payments) {
        let client = clients.find(cli => cli.client_code === payment.code_client);
        if (client) {
            let representative = employees.find(emp => emp.employee_code === client.code_employee_sales_manager);
            let office = offices.find(office => office.code_office === representative.code_office);
            if (representative && office) {
                let clientData = {
                    client_name: client.client_name,
                    sales_representative: `${representative.name} ${representative.lastname1} ${representative.lastname2}`,
                    representative_city: office.city
                };
                clientsWithPaymentsAndRepresentativesAndOffices.push(clientData);
            }
        }
    }
    return clientsWithPaymentsAndRepresentativesAndOffices;
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientsWithNoPaymentsAndRepresentativesAndOffices = async () => {
    let resClients = await fetch("http://localhost:5501/clients");
    let clients = await resClients.json();
    let payments = await getPayments(); 
    let employees = await getEmployees();
    let offices = await getOffices(); 
    let clientsWithNoPaymentsAndRepresentativesAndOffices = [];
    let clientsWithPayments = new Set();
    for (let payment of payments) {
        clientsWithPayments.add(payment.code_client); 
    }
    for (let client of clients) {
        if (!clientsWithPayments.has(client.client_code)) {
            let representative = employees.find(emp => emp.employee_code === client.code_employee_sales_manager);
            if (representative) {
                let office = offices.find(office => office.code_office === representative.code_office);
                if (office) {
                    let clientData = {
                        client_name: client.client_name,
                        sales_representative: `${representative.name} ${representative.lastname1} ${representative.lastname2}`,
                        representative_city: office.city
                    };
                    clientsWithNoPaymentsAndRepresentativesAndOffices.push(clientData);
                }
            }
        }
    }
    return clientsWithNoPaymentsAndRepresentativesAndOffices;
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.


export const getOfficesWithClientsInFuenlabrada = async () => {
    let resClients = await fetch("http://localhost:5501/clients");
    let clients = await resClients.json();
    let employees = await getEmployees();
    let offices = await getOffices();
    let clientsInFuenlabrada = clients.filter(client => client.city === "Fuenlabrada");
    let employeeCodes = clientsInFuenlabrada.map(client => client.code_employee_sales_manager);
    let employeesInFuenlabrada = employees.filter(employee =>
        employeeCodes.includes(employee.employee_code)
    );
    let officeCodes = employeesInFuenlabrada.map(employee => employee.code_office);
    let officesInFuenlabrada = offices.filter(office =>
        officeCodes.includes(office.code_office)
    );
    let addresses = officesInFuenlabrada.map(office => office.address1);
    return addresses;
}
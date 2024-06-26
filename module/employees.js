//3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.

export const getAllEmployeersWithBossCODE7 = async  () => {
    let res = await fetch("http://172.16.101.146:5302/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push({
            Name: val.name,
            lastname: `${val.lastname1} ${val.lastname2}`, 
            email
        })
    });
    return dataUpdate;
    }

//4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.

export const getBOSS = async  () => {
    let res = await fetch("http://172.16.101.146:5302/employees")
    let data = await res.json();
    let dataUpdate = {};
    data.forEach(val => {
        if (val.code_boss == null){
            dataUpdate.nombre = val.name,
            dataUpdate.apellidos = `${val.lastname1} ${val.lastname2}`
            dataUpdate.email = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        };
    });
    return dataUpdate;
    }

//5.Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

export const getAllNotRepresent = async  () => {
    let res = await fetch("http://172.16.101.146:5302/employees?position_ne=Representante%20Ventas")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            Name: val.name,
            lastname: `${val.lastname1} ${val.lastname2}`, 
            puesto: val.position
        })
    });
    return dataUpdate;
    }

// SEGUNDA PARTE ///////////////////////////////////////////////
// EJERCICIO 7 DE SEGUNDA PARTE //////////////////////////////////////////////////////////////


export const getEmployByCode = async(code) =>{
    let res = await fetch(`http://172.16.101.146:5302/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
// 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.
// 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
// 5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
// 6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.
// 8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

export const getEmployees = async () => {
    let res = await fetch("http://172.16.101.146:5302/employees");
    let employees = await res.json();
    return employees;
}

//////////////// TERCERA PARTE ////////////
// 4. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.

export const getEmployeesWithoutOffice = async () => {
    try {
        let res = await fetch("http://172.16.101.146:5302/employees");
        let employees = await res.json();
        const employeesWithoutOffice = employees.filter(employee => !employee.code_office);
        if (employeesWithoutOffice.length === 0) {
            return "No hay empleados sin oficina asociada.";
        } else {
            return employeesWithoutOffice;
        }
    } catch (error) {
        console.error("Error al obtener los empleados sin oficina asociada:", error);
        return [];
    }
}

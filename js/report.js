import "./component/clock.js";

////////////////// EJERCICIO 01 PARTE 1////////////////////////////////////////
import { getAllOficcesCOdeAndCity } from "../module/offices.js";
const queryAboutTable1part1 = document.querySelector("#queryAboutTable1part1");
queryAboutTable1part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1part1.children
    if(!report__container.innerHTML){
        let data = await getAllOficcesCOdeAndCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Oficinas</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo de la oficina: </b>${val.codigo}</p>
                        <p><b>Ciudad de la oficina: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})



////////////////// EJERCICIO 02 PARTE 1////////////////////////////////////////
import { getAllOficcesFromSpainCityAndMovil } from "../module/offices.js";
const queryAboutTable2part1 = document.querySelector("#queryAboutTable2part1");
queryAboutTable2part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable2part1.children
    if(!report__container.innerHTML){
        let data = await getAllOficcesFromSpainCityAndMovil();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Oficinas de España</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre de la ciudad: </b>${val.ciudad}</p>
                        <p><b>Telefono: </b>${val.telefono}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


////////////////// EJERCICIO 03 PARTE 1////////////////////////////////////////
import { getAllEmployeersWithBossCODE7 } from "../module/employees.js";
const queryAboutTable3part1 = document.querySelector("#queryAboutTable3part1");
queryAboutTable3part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable3part1.children
    if(!report__container.innerHTML){
        let data = await getAllEmployeersWithBossCODE7();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleados con el codigo de jefe = 7</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.Name}</p>
                        <p><b>Apellidos: </b>${val.lastname}</p>
                        <p><b>Email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 04 PARTE 1 ////////////////////////////////////////////////
import { getBOSS } from "../module/employees.js";
const queryAboutTable4part1 = document.querySelector("#queryAboutTable4part1");
queryAboutTable4part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable4part1.children
    if(!report__container.innerHTML){
        let data = await getBOSS();
        let plantilla = "";
        console.log(data);
        [data].forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Jefe de la empresa</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 05 PARTE 1 ////////////////////////////////////////////////
import { getAllNotRepresent } from "../module/employees.js";
const queryAboutTable5part1 = document.querySelector("#queryAboutTable5part1");
queryAboutTable5part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable5part1.children
    if(!report__container.innerHTML){
        let data = await getAllNotRepresent();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleados que no son representantes de ventas</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.Name}</p>
                        <p><b>Apellidos: </b>${val.lastname}</p>
                        <p><b>Puesto: </b>${val.puesto}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})



/////////////////// EJERCICIO 06 PARTE 1 ////////////////////////////////////////////////
import { getAllClientSpanishPeople } from "../module/clients.js";
const queryAboutTable6part1 = document.querySelector("#queryAboutTable6part1");
queryAboutTable6part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable6part1.children
    if(!report__container.innerHTML){
        let data = await getAllClientSpanishPeople();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Nombre de Clientes españoles</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Cliente Español: </b>${val.Name}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

/////////////////// EJERCICIO 07 PARTE 1 ////////////////////////////////////////////////
import { getAllProductStatus } from "../module/requests.js";
const queryAboutTable7part1 = document.querySelector("#queryAboutTable7part1");
queryAboutTable7part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable7part1.children
    if(!report__container.innerHTML){
        let data = await getAllProductStatus();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Estados por los que puede pasar un pedido</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Status: </b>${val.Status}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 08 PARTE 1 ////////////////////////////////////////////////
import { getClientCodesWithPaymentsIn2008 } from "../module/payments.js";
const queryAboutTable8part1 = document.querySelector("#queryAboutTable8part1");
queryAboutTable8part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable8part1.children
    if(!report__container.innerHTML){
        let data = await getClientCodesWithPaymentsIn2008();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo de Clientes que realizaron un pago en 2008</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b>${val.CodigoCliente}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 09 PARTE 1 ////////////////////////////////////////////////
import { getAllLateOrders } from "../module/requests.js";
const queryAboutTable9part1 = document.querySelector("#queryAboutTable9part1");
queryAboutTable9part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable9part1.children
    if(!report__container.innerHTML){
        let data = await getAllLateOrders();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedidos que no han sido entregados a tiempo</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.code_request}</p>
                        <p><b>Codigo del cliente: </b>${val.code_client}</p>
                        <p><b>Fecha esperada: </b>${val.date_wait}</p>
                        <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 10 PARTE 1 ////////////////////////////////////////////////
import { getEarlyOrders } from "../module/requests.js";
const queryAboutTable10part1 = document.querySelector("#queryAboutTable10part1");
queryAboutTable10part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable10part1.children
    if(!report__container.innerHTML){
        let data = await getEarlyOrders();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.code_request}</p>
                        <p><b>Codigo del cliente: </b>${val.code_client}</p>
                        <p><b>Fecha esperada: </b>${val.date_wait}</p>
                        <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 11 PARTE 1 ////////////////////////////////////////////////
import { getRejectedOrdersInYear } from "../module/requests.js";
const queryAboutTable11part1 = document.querySelector("#queryAboutTable11part1");
queryAboutTable11part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable11part1.children
    if(!report__container.innerHTML){
        let data = await getRejectedOrdersInYear();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedidos rechazados en 2009.</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.code_request}</p>
                        <p><b>Codigo del cliente: </b>${val.code_client}</p>
                        <p><b>Fecha: </b>${val.date_request}</p>
                        <p><b>Status: </b>${val.status}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 12 PARTE 1 ////////////////////////////////////////////////
import { getDeliveredOrdersInJanuary } from "../module/requests.js";
const queryAboutTable12part1 = document.querySelector("#queryAboutTable12part1");
queryAboutTable12part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable12part1.children
    if(!report__container.innerHTML){
        let data = await getDeliveredOrdersInJanuary();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedidos entregados en enero de cualquier año.</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.code_request}</p>
                        <p><b>Codigo del cliente: </b>${val.code_client}</p>
                        <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 13 PARTE 1 ////////////////////////////////////////////////
import { getPaymentsIn2008ViaPaypal } from "../module/payments.js";
const queryAboutTable13part1 = document.querySelector("#queryAboutTable13part1");
queryAboutTable13part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable13part1.children
    if(!report__container.innerHTML){
        let data = await getPaymentsIn2008ViaPaypal();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>pagos que se realizaron en el año 2008 mediante paypal</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b>${val.code_client}</p>
                        <p><b>Metodo de pago: </b>${val.payment}</p>
                        <p><b>ID de transaccion: </b>${val.id_transaction}</p>
                        <p><b>Fecha de pago: </b>${val.date_payment}</p>
                        <p><b>Total: </b>${val.total}</p>
                        <p><b>Id: </b>${val.id}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 14 PARTE 1 ////////////////////////////////////////////////
import { getUniquePaymentMethods } from "../module/payments.js";
const queryAboutTable14part1 = document.querySelector("#queryAboutTable14part1");
queryAboutTable14part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable14part1.children
    if(!report__container.innerHTML){
        let data = await getUniquePaymentMethods();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Todas las formas de pago</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Metodo de pago: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

/////////////////// EJERCICIO 15 PARTE 1 ////////////////////////////////////////////////
import { getOrnamentalProductsOver100Units } from "../module/gama.js";
const queryAboutTable15part1 = document.querySelector("#queryAboutTable15part1");
queryAboutTable15part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable15part1.children
    if(!report__container.innerHTML){
        let data = await getOrnamentalProductsOver100Units();
        let plantilla = "";
        console.log(data);
        [data].forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock..</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Respuesta: </b>No se encontraron productos que cumplan esa condicion</p>
        
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})




/////////////////// EJERCICIO 16 PARTE 1 ////////////////////////////////////////////////
import { getClientsInMadridWithSalesRepresentatives } from "../module/clients.js";
const queryAboutTable16part1 = document.querySelector("#queryAboutTable16part1");
queryAboutTable16part1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable16part1.children
    if(!report__container.innerHTML){
        let data = await getClientsInMadridWithSalesRepresentatives();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes que son de Madrid y cuyo representante de ventas tiene código 11 o 30.</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Cliente: </b>${val.client_name}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                        <p><b>Codigo del representante de ventas: </b>${val.code_employee_sales_manager}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 01 PARTE 2 ////////////////////////////////////////////////
import { getClientSalesRepresentatives } from "../module/clients.js";
const queryAboutTable1part2 = document.querySelector("#queryAboutTable1part2");
queryAboutTable1part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1part2.children
    if(!report__container.innerHTML){
        let data = await getClientSalesRepresentatives();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Nombres de clientes y nombres y apellidos del representante de ventas</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del Cliente: </b>${val.client_name}</p>
                        <p><b>Nombre del representante de ventas: </b>${val.sales_representative}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 02 PARTE 2 ////////////////////////////////////////////////
import { getClientsWithSalesRepresentativesAndPayments } from "../module/clients.js";
const queryAboutTable2part2 = document.querySelector("#queryAboutTable2part2");
queryAboutTable2part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable2part2.children
    if(!report__container.innerHTML){
        let data = await getClientsWithSalesRepresentativesAndPayments();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes que realizaron pagos junto con su representante de ventas.</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del Cliente: </b>${val.client_name}</p>
                        <p><b>Nombre del representante de ventas: </b>${val.sales_representative}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 03 PARTE 2 ////////////////////////////////////////////////
import { getClientsWithoutPaymentsAndSalesRepresentatives } from "../module/clients.js";
const queryAboutTable3part2 = document.querySelector("#queryAboutTable3part2");
queryAboutTable3part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable3part2.children
    if(!report__container.innerHTML){
        let data = await getClientsWithoutPaymentsAndSalesRepresentatives();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes que no realizaron pagos junto con su representante de ventas.</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del Cliente: </b>${val.client_name}</p>
                        <p><b>Nombre del representante de ventas: </b>${val.sales_representative}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 04 PARTE 2 ////////////////////////////////////////////////
import { getClientsWithPaymentsAndRepresentativesAndOffices } from "../module/clients.js";
const queryAboutTable4part2 = document.querySelector("#queryAboutTable4part2");
queryAboutTable4part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable4part2.children
    if(!report__container.innerHTML){
        let data = await getClientsWithPaymentsAndRepresentativesAndOffices();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes que realizaron pagos junto con su representante de ventas y la ciudad de su oficina.</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del Cliente: </b>${val.client_name}</p>
                        <p><b>Nombre del representante de ventas: </b>${val.sales_representative}</p>
                        <p><b>Ciudad de la oficina del representante de ventas: </b>${val.representative_city}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

/////////////////// EJERCICIO 05 PARTE 2 ////////////////////////////////////////////////
import { getClientsWithNoPaymentsAndRepresentativesAndOffices } from "../module/clients.js";
const queryAboutTable5part2 = document.querySelector("#queryAboutTable5part2");
queryAboutTable5part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable5part2.children
    if(!report__container.innerHTML){
        let data = await getClientsWithNoPaymentsAndRepresentativesAndOffices();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes que no realizaron pagos junto con su representante de ventas y la ciudad de su oficina.</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del Cliente: </b>${val.client_name}</p>
                        <p><b>Nombre del representante de ventas: </b>${val.sales_representative}</p>
                        <p><b>Ciudad de la oficina del representante de ventas: </b>${val.representative_city}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 06 PARTE 2 ////////////////////////////////////////////////
import { getOfficesWithClientsInFuenlabrada } from "../module/clients.js";
const queryAboutTable6part2 = document.querySelector("#queryAboutTable6part2");
queryAboutTable6part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable6part2.children
    if(!report__container.innerHTML){
        let data = await getOfficesWithClientsInFuenlabrada();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Direccion de oficinas "Fuenlabrada"</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Direccion de oficinas: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})



/////////////////// EJERCICIO 07 PARTE 2 ////////////////////////////////////////////////
import { getClientsEmploy } from "../module/clients.js";
const queryAboutTable7part2 = document.querySelector("#queryAboutTable7part2");
queryAboutTable7part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable7part2.children
    if(!report__container.innerHTML){
        let data = await getClientsEmploy();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Nombre del cliente junto con el del representante y la oficina a la que pertenece</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del cliente: </b>${val.client_name}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                        <p><b>Nombre del representante: </b>${val.name_employee}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 08 PARTE 2 ////////////////////////////////////////////////
import { getEmployeesWithBossNames } from "../module/clients.js";
const queryAboutTable8part2 = document.querySelector("#queryAboutTable8part2");
queryAboutTable8part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable8part2.children
    if(!report__container.innerHTML){
        let data = await getEmployeesWithBossNames();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Nombre de empleados con el nombre de sus jefes</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del Empleado: </b>${val.employee_name}</p>
                        <p><b>Nombre del jefe: </b>${val.boss_name}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

/////////////////// EJERCICIO 09 PARTE 2 ////////////////////////////////////////////////
import { getEmployeesWithBossChainNames } from "../module/clients.js";
const queryAboutTable9part2 = document.querySelector("#queryAboutTable9part2");
queryAboutTable9part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable9part2.children
    if(!report__container.innerHTML){
        let data = await getEmployeesWithBossChainNames();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Nombre de empleados con el nombre de sus jefes</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del Empleado: </b>${val.employee_name}</p>
                        <p><b>Nombre de los jefes: </b>${val.boss_chain}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})



/////////////////// EJERCICIO 10 PARTE 2 ////////////////////////////////////////////////
import { getLateDeliveriesClients } from "../module/requests.js";
const queryAboutTable10part2 = document.querySelector("#queryAboutTable10part2");
queryAboutTable10part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable10part2.children
    if(!report__container.innerHTML){
        let data = await getLateDeliveriesClients();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Nombre de los clientes que no se les entrego a tiempo un pedido</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del cliente: </b>${val.nombre}</p>
                        <p><b>Codigo cliente: </b>${val.codigo}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 11 PARTE 2 ////////////////////////////////////////////////
import { getCustomerProductRanges } from "../module/clients.js";
const queryAboutTable11part2 = document.querySelector("#queryAboutTable11part2");
queryAboutTable11part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable11part2.children
    if(!report__container.innerHTML){
        let data = await getCustomerProductRanges();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Gamas de producto</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del cliente: </b>${val.clientName}</p>
                        <p><b>ID: </b>${val.clientId}</p>
                        <p><b>Producto: </b>${val.productRanges}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 01 PARTE 3 ////////////////////////////////////////////////
import { getNonPayingClients } from "../module/clients.js";
const queryAboutTable1part3 = document.querySelector("#queryAboutTable1part3");
queryAboutTable1part3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1part3.children
    if(!report__container.innerHTML){
        let data = await getNonPayingClients();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes que no han realizado ningun pago</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del cliente: </b>${val.nombre}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

/////////////////// EJERCICIO 02 PARTE 3 ////////////////////////////////////////////////
import { getNonOrderingClients } from "../module/clients.js";
const queryAboutTable2part3 = document.querySelector("#queryAboutTable2part3");
queryAboutTable2part3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable2part3.children
    if(!report__container.innerHTML){
        let data = await getNonOrderingClients();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes que no han realizado ningun pedido</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del cliente: </b>${val.nombre}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


/////////////////// EJERCICIO 03 PARTE 3 ////////////////////////////////////////////////
import { getNonPayingAndOrderingClients } from "../module/clients.js";
const queryAboutTable3part3 = document.querySelector("#queryAboutTable3part3");
queryAboutTable3part3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable3part3.children
    if(!report__container.innerHTML){
        let data = await getNonPayingAndOrderingClients();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes que no han realizado ningun pago y ningun pedido</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del cliente: </b>${val.nombre}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

/////////////////// EJERCICIO 04 PARTE 3 ////////////////////////////////////////////////
import { getEmployeesWithoutOffice } from "../module/employees.js";
const queryAboutTable4part3 = document.querySelector("#queryAboutTable4part3");
queryAboutTable4part3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable4part3.children
    if(!report__container.innerHTML){
        let data = await getEmployeesWithoutOffice();
        let plantilla = "";
        console.log(data);
        [data].forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleados que no tienen una oficina asociada</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Respuesta: </b>No hay empleados sin oficina asociada.</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
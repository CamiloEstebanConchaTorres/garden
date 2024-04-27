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
        data.forEach(val => {
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

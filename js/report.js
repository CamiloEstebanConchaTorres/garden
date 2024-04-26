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
const queryAboutTable1part2 = document.querySelector("#queryAboutTable1part2");
queryAboutTable1part2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1part2.children
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
const queryAboutTable1part3 = document.querySelector("#queryAboutTable1part3");
queryAboutTable1part3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1part3.children
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

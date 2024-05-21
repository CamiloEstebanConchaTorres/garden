// NECESARIO PARA EJERCICIO 10 DE LA SEGUNDA PARTE

import {
    getClientNamesByCodes
} from "./clients.js";


// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllProductStatus = async () => {
    try {
        let res = await fetch("http://172.16.101.146:5308/requests?status");
        let data = await res.json();
        let uniqueStatus = new Set();
        data.forEach(val => {
            uniqueStatus.add(val.status);
        });
        let uniqueStatusArray = Array.from(uniqueStatus);
        let dataUpdate = uniqueStatusArray.map(status => {
            return { Status: status };
        });
        return dataUpdate;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllLateOrders = async () => {
    try {
        let res = await fetch("http://172.16.101.146:5308/requests?status");
        let data = await res.json();
        let lateOrders = data.filter(order => order.status === "Pendiente" && (
            (order.date_delivery !== null && new Date(order.date_delivery) > new Date(order.date_wait)) ||
            (order.date_delivery === null && new Date() > new Date(order.date_wait))
        ));
        let lateOrdersList = lateOrders.map(order => {
            return {
                code_request: order.code_request,
                code_client: order.code_client,
                date_wait: order.date_wait,
                date_delivery: order.date_delivery
            };
        });

        return lateOrdersList;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}


// 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

export const getEarlyOrders = async () => {
    try {
        let res = await fetch("http://172.16.101.146:5308/requests?status");
        let data = await res.json();
        let earlyOrders = data.filter(order => order.date_delivery !== null && new Date(order.date_delivery) < new Date(order.date_wait) - (2 * 24 * 60 * 60 * 1000));
        let earlyOrdersList = earlyOrders.map(order => {
            return {
                code_request: order.code_request,
                code_client: order.code_client,
                date_wait: order.date_wait,
                date_delivery: order.date_delivery
            };
        });
        return earlyOrdersList;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

// 11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.

export const getRejectedOrdersInYear = async (year) => {
    try {
        let res = await fetch("http://172.16.101.146:5308/requests?status");
        let data = await res.json();
        let rejectedOrders = data.filter(order => {
            const orderDate = new Date(order.date_request);
            return order.status === "Rechazado" && orderDate.getFullYear() === 2009;
        });
        let rejectedOrdersList = rejectedOrders.map(order => {
            return {
                code_request: order.code_request,
                code_client: order.code_client,
                date_request: order.date_request,
                status: order.status
            };
        });

        return rejectedOrdersList;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return [];
    }
}

// 12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.

export const getDeliveredOrdersInJanuary = async () => {
    try {
        let res = await fetch("http://172.16.101.146:5308/requests?status");
        let data = await res.json();
        let deliveredOrdersInJanuary = data.filter(order => {
            const deliveryDate = new Date(order.date_delivery);
            return order.status === "Entregado" && deliveryDate.getMonth() === 0;
        });
        let deliveredOrdersList = deliveredOrdersInJanuary.map(order => {
            return {
                code_request: order.code_request,
                code_client: order.code_client,
                date_request: order.date_request,
                date_delivery: order.date_delivery,
                status: order.status
            };
        });

        return deliveredOrdersList;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return [];
    }
}


///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.


export const getLateDeliveriesClients = async () => {
    try {
        let res = await fetch("http://172.16.101.146:5308/requests");
        let data = await res.json();
        let lateDeliveries = data.filter(order => {
            const deliveryDate = new Date(order.date_delivery);
            const waitDate = new Date(order.date_wait);
            return order.status === "Entregado" && deliveryDate > waitDate;
        });
        let lateClientsCodes = [...new Set(lateDeliveries.map(order => order.code_client))];
        let lateClientsNames = await getClientNamesByCodes(lateClientsCodes);
        let lateClients = lateClientsCodes.map((code, index) => {
            return {
                codigo: code,
                nombre: lateClientsNames[index]
            };
        });
        return lateClients;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return [];
    }
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.
// TAMBIEN //
// TERCERA PARTE//
// 2. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.

export const getRequests = async () => {
    try {
        let res = await fetch("http://172.16.101.146:5308/requests");
        let requests = await res.json();
        return requests;
    } catch (error) {
        console.error("Error al obtener los datos de los pedidos:", error);
        return [];
    }
}
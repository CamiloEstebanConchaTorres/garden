// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllProductStatus = async () => {
    try {
        let res = await fetch("http://localhost:5508/requests?status");
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
        let res = await fetch("http://localhost:5508/requests?status");
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
        let res = await fetch("http://localhost:5508/requests?status");
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
        let res = await fetch("http://localhost:5508/requests?status");
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
        let res = await fetch("http://localhost:5508/requests?status");
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





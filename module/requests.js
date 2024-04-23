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



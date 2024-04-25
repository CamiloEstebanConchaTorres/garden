// 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos.

export const getClientCodesWithPaymentsIn2008 = async () => {
    let res = await fetch("http://localhost:5505/payments");
    let data = await res.json();
    let payments2008 = data.filter(val => {
        const paymentYear = new Date(val.date_payment).getFullYear();
        return paymentYear === 2008;
    });
    let uniqueClientCodes = new Set();
    payments2008.forEach(val => {
        uniqueClientCodes.add(val.code_client);
    });
    let uniqueClientCodesArray = Array.from(uniqueClientCodes);
    let dataUpdate = uniqueClientCodesArray.map(code => {
        return { CodigoCliente: code };
    });

    return dataUpdate;
}

// 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor. 

export const getPaymentsIn2008ViaPaypal = async () => {
    let res = await fetch("http://localhost:5505/payments");
    let data = await res.json();
    let payments2008Paypal = data.filter(val => {
        return val.payment === "PayPal" && new Date(val.date_payment).getFullYear() === 2008;
    });
    payments2008Paypal.sort((a, b) => b.total - a.total);
    return payments2008Paypal;
}

// 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.

export const getUniquePaymentMethods = async () => {
    let res = await fetch("http://localhost:5505/payments");
    let data = await res.json();
    let uniquePaymentMethods = [...new Set(data.map(val => `payment: ${val.payment}`))];
    return uniquePaymentMethods;
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getPayments = async () => {
    let res = await fetch("http://localhost:5505/payments");
    let payments = await res.json();
    return payments;
}

///////////////// SEGUNDA PARTE /////////////////////////////////////////
// 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.
// 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
// 5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getUnpaidClients = async () => {
    let res = await fetch("http://localhost:5505/payments");
    let payments = await res.json();
    return payments;
}

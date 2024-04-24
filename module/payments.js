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



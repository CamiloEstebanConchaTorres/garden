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

import {
    getAllOficcesCOdeAndCity,
    getAllOficcesFromSpainCityAndMovil,
    getOffices
} from "../module/offices.js";

import {
    getAllEmployeersWithBossCODE7,
    getBOSS,
    getAllNotRepresent,
    getEmployeesWithoutOffice
} from "../module/employees.js";

import {
    getAllClientSpanishPeople,
    getClientsInMadridWithSalesRepresentatives,
    getClientsEmploy,
    getClientSalesRepresentatives,
    getClientsWithSalesRepresentativesAndPayments,
    getClientsWithoutPaymentsAndSalesRepresentatives,
    getClientsWithPaymentsAndRepresentativesAndOffices,
    getClientsWithNoPaymentsAndRepresentativesAndOffices,
    getOfficesWithClientsInFuenlabrada,
    getEmployeesWithBossNames,
    getEmployeesWithBossChainNames,
    getCustomerProductRanges,
    getNonPayingClients,
    getNonOrderingClients,
    getNonPayingAndOrderingClients
} from "../module/clients.js";

import {
    getAllProductStatus,
    getAllLateOrders,
    getEarlyOrders,
    getRejectedOrdersInYear,
    getDeliveredOrdersInJanuary,
    getLateDeliveriesClients
} from "../module/requests.js";

import {
    getClientCodesWithPaymentsIn2008,
    getPaymentsIn2008ViaPaypal,
    getUniquePaymentMethods
} from "../module/payments.js";

import {
    getOrnamentalProductsOver100Units    
} from "../module/gama.js";


console.log(await getEmployeesWithoutOffice());

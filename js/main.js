import {
    getAllOficcesCOdeAndCity,
    getAllOficcesFromSpainCityAndMovil
} from "../module/offices.js";

import {
    getAllEmployeersWithBossCODE7,
    getBOSS,
    getAllNotRepresent
} from "../module/employees.js";

import {
    getAllClientSpanishPeople
} from "../module/clients.js";

import {
    getAllProductStatus,
    getAllLateOrders
} from "../module/requests.js";

import {
    getClientCodesWithPaymentsIn2008
} from "../module/payments.js";


console.log(await getAllLateOrders());

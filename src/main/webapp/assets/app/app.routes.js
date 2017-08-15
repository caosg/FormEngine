/**
 * Application routes
 * Created by Michael DESIGAUD on 11/11/2016.
 */
"use strict";
const router_1 = require("@angular/router");
const customer_1 = require("./customer/customer");
const customers_1 = require("./customers/customers");
const routes = [
    { path: 'customers', component: customers_1.Customers },
    { path: 'customer/create', component: customer_1.Customer },
    { path: 'customer/:id', component: customer_1.Customer },
    { path: '', component: customers_1.Customers },
];
exports.RoutesModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map
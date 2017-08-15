/**
 * Customers module
 * Created by Michael DESIGAUD on 11/11/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const form_module_1 = require("../form/form.module");
const customers_1 = require("./customers");
let CustomersModule = class CustomersModule {
};
CustomersModule = __decorate([
    core_1.NgModule({
        imports: [form_module_1.FormModule],
        declarations: [customers_1.Customers],
        bootstrap: [customers_1.Customers]
    }),
    __metadata("design:paramtypes", [])
], CustomersModule);
exports.CustomersModule = CustomersModule;
//# sourceMappingURL=customers.module.js.map
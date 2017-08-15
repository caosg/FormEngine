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
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
let Customer = class Customer {
    constructor(route, http, router, form) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.form = form;
        this.customer = {};
        this.nbErrors = 0;
        this.customerGroup = form.group({
            firstName: new forms_1.FormControl('', [forms_1.Validators.required]),
            lastName: new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.customerGroup.valueChanges.subscribe(() => {
            if (this.customerGroup.errors) {
                this.nbErrors = Object.keys(this.customerGroup.errors).length;
            }
        });
    }
    ngOnInit() {
        this.route.params
            .forEach(params => {
            this.isEdition = !!params['id'];
            if (this.isEdition) {
                this.getCustomer(params['id']);
            }
            else {
                this.customer.extraFields = {};
                this.customerPromise = Promise.resolve(this.customer);
            }
        });
    }
    getCustomer(id) {
        this.customerPromise = this.http.get('http://localhost:8080/api/customers/' + id)
            .map(res => res.json()).toPromise();
        this.customerPromise.then((customer) => {
            this.customer = customer;
            return customer;
        });
    }
    cancel() {
        this.router.navigate(['/customers']);
    }
    saveCustomer() {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let reqOptions = {};
        reqOptions.body = JSON.stringify(this.customer);
        reqOptions.headers = headers;
        this.isEdition ? reqOptions.method = 'PUT' : reqOptions.method = 'POST';
        this.http.request('http://localhost:8080/api/customers', reqOptions)
            .map(res => res.json())
            .subscribe(() => this.router.navigate(['/customers']));
    }
};
Customer = __decorate([
    core_1.Component({
        selector: 'customer',
        templateUrl: './app/customer/customer.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.Http, router_1.Router, forms_1.FormBuilder])
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map
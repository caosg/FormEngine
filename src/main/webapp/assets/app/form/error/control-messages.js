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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const validator_service_1 = require("../validators/validator.service");
let ControlMessages = class ControlMessages {
    constructor(formDir) {
        this.formDir = formDir;
    }
    get errors() {
        let c = this.formDir.form.get(this.controlName);
        if (c) {
            for (let propertyName in c.errors) {
                if (c.errors.hasOwnProperty(propertyName)) {
                    return validator_service_1.ValidatorService.getValidatorErrorMessage(c);
                }
            }
        }
        return [];
    }
};
__decorate([
    core_1.Input('control'),
    __metadata("design:type", String)
], ControlMessages.prototype, "controlName", void 0);
ControlMessages = __decorate([
    core_1.Component({
        selector: 'error-messages',
        template: `<div [hidden]="!errors.length === 0"><span *ngFor="let error of errors"><span class="label label-danger">{{error}}</span>&nbsp;</span></div>`
    }),
    __param(0, core_1.Inject(forms_1.NgForm)),
    __metadata("design:paramtypes", [forms_1.NgForm])
], ControlMessages);
exports.ControlMessages = ControlMessages;
//# sourceMappingURL=control-messages.js.map
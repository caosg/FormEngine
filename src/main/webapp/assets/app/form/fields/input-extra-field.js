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
const forms_1 = require("@angular/forms");
const form_1 = require("../model/form");
const extra_field_1 = require("./extra-field");
let InputExtraField = class InputExtraField extends extra_field_1.ExtraField {
    constructor(formDir) {
        super(formDir);
    }
    get disabled() {
        if (this.field && !this.field.writable) {
            return 'disabled';
        }
        return null;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", form_1.ExtraFormField)
], InputExtraField.prototype, "field", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputExtraField.prototype, "entity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup)
], InputExtraField.prototype, "formGroup", void 0);
InputExtraField = __decorate([
    core_1.Component({
        selector: 'input-extra-field',
        template: `
        <div [formGroup]="formGroup" class="form-group">
            <label [attr.for]="field.name">{{field.label}}</label>
            <input [attr.title]="field.label" [attr.minlength]="field.minLength" [attr.min]="field.min" [attr.max]="field.max"
            [attr.maxlength]="field.maxLength" [attr.placeholder]="field.placeholder"
            [attr.type]="field.type" [formControl]="fieldControl"
            [attr.id]="field.name" [(ngModel)]="entity.extraFields[field.name]" [attr.disabled]="disabled" class="form-control">
            <error-messages [control]="field.name"></error-messages>
        </div>
    `
    }),
    __metadata("design:paramtypes", [forms_1.NgForm])
], InputExtraField);
exports.InputExtraField = InputExtraField;
//# sourceMappingURL=input-extra-field.js.map
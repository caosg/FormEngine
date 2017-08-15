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
const form_1 = require("../model/form");
const extra_field_1 = require("./extra-field");
let FileInputExtraField = class FileInputExtraField extends extra_field_1.ExtraField {
    constructor(formDir) {
        super(formDir);
    }
    onChange(event) {
        event.preventDefault();
        if (this.field.isTypeFile()) {
            let file = event.target.files[0];
            let fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onloadend = () => {
                this.entity.extraFields[this.field.name] = fileReader.result;
            };
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", form_1.ExtraFormField)
], FileInputExtraField.prototype, "field", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FileInputExtraField.prototype, "entity", void 0);
FileInputExtraField = __decorate([
    core_1.Component({
        selector: 'file-input-extra-field',
        template: `
        <div class="form-group">
            <label [attr.for]="field.name">{{field.label}}</label>
            <input [attr.title]="field.label" [attr.placeholder]="field.placeholder"
            type="file"
            [attr.accept]="field.fileAccept"
            [attr.id]="field.name" class="form-control" (change)="onChange($event)">
            <error-messages [control]="field.name"></error-messages>
        </div>
    `
    }),
    __param(0, core_1.Inject(forms_1.NgForm)),
    __metadata("design:paramtypes", [forms_1.NgForm])
], FileInputExtraField);
exports.FileInputExtraField = FileInputExtraField;
//# sourceMappingURL=file-input-extra-field.js.map
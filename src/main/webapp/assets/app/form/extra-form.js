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
const http_1 = require("@angular/http");
const input_extra_field_1 = require("./fields/input-extra-field");
const form_1 = require("./model/form");
const textarea_extra_field_1 = require("./fields/textarea-extra-field");
const file_input_extra_field_1 = require("./fields/file-input-extra-field");
const select_extra_field_1 = require("./fields/select-extra-field");
const date_input_extra_field_1 = require("./fields/date-input-extra-field");
const forms_1 = require("@angular/forms");
let DynamicForm = class DynamicForm {
    constructor(http, componentFactoryResolver) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.onlyExtraFields = true;
        this.form = new form_1.ExtraForm();
    }
    ngOnInit() {
        let formPromise = this.http.get('http://localhost:8080/api/customers/form?onlyExtraFields=' + this.onlyExtraFields)
            .map(res => res.json())
            .toPromise();
        Promise.all([this.entityPromise, formPromise]).then((values) => {
            let entity = values[0];
            this.form = new form_1.ExtraForm(values[1]);
            if (!entity.extraFields) {
                entity.extraFields = {};
            }
            this.form.fields.forEach((field) => {
                let type;
                if (field.isInput()) {
                    type = input_extra_field_1.InputExtraField;
                }
                if (field.isTypeTextArea()) {
                    type = textarea_extra_field_1.TextAreaExtraField;
                }
                if (field.isTypeFile()) {
                    type = file_input_extra_field_1.FileInputExtraField;
                }
                if (field.isTypeSelect()) {
                    type = select_extra_field_1.SelectExtraField;
                }
                if (field.isTypeDate()) {
                    type = date_input_extra_field_1.DateInputExtraField;
                }
                let factory = this.componentFactoryResolver.resolveComponentFactory(type);
                let componentRef = this.extraFieldRef.createComponent(factory);
                componentRef.instance.entity = entity;
                componentRef.instance.field = field;
                componentRef.instance.formGroup = this.formGroup;
            });
        });
    }
};
__decorate([
    core_1.Input('entity'),
    __metadata("design:type", Promise)
], DynamicForm.prototype, "entityPromise", void 0);
__decorate([
    core_1.Input('formGroup'),
    __metadata("design:type", forms_1.FormGroup)
], DynamicForm.prototype, "formGroup", void 0);
__decorate([
    core_1.ViewChild('extraField', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], DynamicForm.prototype, "extraFieldRef", void 0);
DynamicForm = __decorate([
    core_1.Component({
        selector: 'extra-form',
        template: '<div #extraField></div>'
    }),
    __metadata("design:paramtypes", [http_1.Http, core_1.ComponentFactoryResolver])
], DynamicForm);
exports.DynamicForm = DynamicForm;
//# sourceMappingURL=extra-form.js.map
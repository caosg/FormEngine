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
/**
 * Created by Michael DESIGAUD on 11/11/2016.
 */
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
const date_input_extra_field_1 = require("./fields/date-input-extra-field");
const file_input_extra_field_1 = require("./fields/file-input-extra-field");
const input_extra_field_1 = require("./fields/input-extra-field");
const select_extra_field_1 = require("./fields/select-extra-field");
const textarea_extra_field_1 = require("./fields/textarea-extra-field");
const extra_form_1 = require("./extra-form");
const control_messages_1 = require("./error/control-messages");
const pipes_module_1 = require("../pipes/pipes.module");
let FormModule = class FormModule {
};
FormModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, pipes_module_1.PipesModule],
        declarations: [
            date_input_extra_field_1.DateInputExtraField, file_input_extra_field_1.FileInputExtraField,
            input_extra_field_1.InputExtraField, select_extra_field_1.SelectExtraField, textarea_extra_field_1.TextAreaExtraField, extra_form_1.DynamicForm, control_messages_1.ControlMessages
        ],
        entryComponents: [date_input_extra_field_1.DateInputExtraField, file_input_extra_field_1.FileInputExtraField,
            input_extra_field_1.InputExtraField, select_extra_field_1.SelectExtraField, textarea_extra_field_1.TextAreaExtraField],
        bootstrap: [
            extra_form_1.DynamicForm, control_messages_1.ControlMessages
        ],
        exports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, control_messages_1.ControlMessages, extra_form_1.DynamicForm, pipes_module_1.PipesModule]
    }),
    __metadata("design:paramtypes", [])
], FormModule);
exports.FormModule = FormModule;
//# sourceMappingURL=form.module.js.map
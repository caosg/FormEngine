"use strict";
///<reference path="../../../../../../typings/lodash/lodash.d.ts" />
const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
class ValidatorService {
    static getValidatorErrorMessage(control) {
        let errors = [];
        if (control.hasError('required')) {
            errors.push('This field is required');
        }
        if (control.hasError('invalidEmailAddress')) {
            errors.push('Invalid email address');
        }
        if (control.hasError('invalidNumber')) {
            errors.push('Must be a number');
        }
        if (control.hasError('minlength')) {
            let error = control.getError('minlength');
            errors.push('At least ' + error.requiredLength + ' characters minimum, actual: ' + error.actualLength);
        }
        if (control.hasError('pattern')) {
            let error = control.getError('pattern');
            errors.push('Invalid pattern, must match: ' + error.regex);
        }
        return errors;
    }
    static emailValidator(control) {
        if (control.value && control.value.match(EMAIL_REGEX)) {
            return null;
        }
        return { 'invalidEmailAddress': true };
    }
    static numberValidator(control) {
        if (control.value && !isNaN(control.value)) {
            return null;
        }
        return { 'invalidNumber': true };
    }
    static regexValidator(pattern) {
        return (control) => {
            return control.value && control.value.match(pattern) ? null : { pattern: { regex: pattern } };
        };
    }
}
exports.ValidatorService = ValidatorService;
//# sourceMappingURL=validator.service.js.map
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validProductCode(control: AbstractControl): {[key: string]: any} {
    const productRegex = new RegExp('^[A-Z]{3}-[0-9]{4}$')
    const productCode = control.value
    return !productRegex.test(productCode) ? {'validProductCode': {productCode}} : null;
}

// Function below coming from angular spec
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const name = control.value;
    const no = nameRe.test(name);
    return no ? {'forbiddenName': {name}} : null;
  };
}
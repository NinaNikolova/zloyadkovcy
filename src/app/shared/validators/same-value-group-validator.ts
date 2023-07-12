import { FormGroup, ValidatorFn } from "@angular/forms";

export function sameValueGroupValidator(controlName1: string, controlName2: string): ValidatorFn {
    return (control)=>{
        const group = control as FormGroup;
        const c1 = group.get(controlName1);
        const c2 = group.get(controlName2);
        return c1?.value===c2?.value ? null : {sameValueGroupValidator: true};
    }
}
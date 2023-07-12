import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains: string[]): ValidatorFn {
    return (control) => {
        // ^[^@]{4,}@[gmail|abv|yahoo|students.119su]\.(com|bg)$
        const domainString = domains.join('|');
        const re = new RegExp(`^[^@]{4,}@${domainString}$`)
        return (control.value==="" || re.test(control.value)) ? null : { appEmailValidator: true }
    }


}
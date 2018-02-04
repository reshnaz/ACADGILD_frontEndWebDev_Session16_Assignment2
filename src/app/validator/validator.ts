import { FormControl } from '@angular/forms';
/*
This is a validation function.
It allows user to enter only 3 digits (no more, no less).
Function uses pattern matching.
In this application, it is used for person ID field.
*/
export function ThreeDigits(control: FormControl) {
    var regexp = new RegExp('^[0-9]{3}$');
    if (control.value !== "" && !regexp.test(control.value)) {
        return { validId: true };
    }
    return null;
}

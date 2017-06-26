import { Observable } from 'rxjs/Observable';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import 'rxjs/add/observable/from'

export function freeEmail(control: AbstractControl): Observable<ValidationErrors | null> {
    return Observable.from([null]).take(1)
}
import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {BaseInput} from "../inputs/BaseInput";

@Component({
    selector: 'app-dynamic-input',
    templateUrl: './dynamicInput.html'
})
export class DynamicInputComponent {
    @Input() input: BaseInput<any>;
    @Input() form: FormGroup;

    public isValid(): boolean {
        return this.form.controls[this.input.key].valid;
    }
}
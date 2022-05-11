import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() message: string;
  @Input() field: FormGroup;
  //errors to check are either valid or required type errors.
  //form.get('email').errors?.email does the same thing as ///!form.get('email').valid
  @Input() error: string;

  constructor() { }

  ngOnInit() {}

  shouldShowComponent(){
    //*ngIf="form.get('email').errors?.required && form.get('email').touched"
     if(this.field.touched && this.field.errors?.[this.error]){
       return true;
     }
    return false;
  }

}

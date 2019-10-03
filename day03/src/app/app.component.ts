import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('rsvpForm', { static: false })
  myForm: NgForm;

  @ViewChild('nameField', { static: false })
  nameField: NgModel;

  @ViewChild('phoneField', { static: false })
  phoneFieldRef: ElementRef;

  processForm(f: NgForm) {
    console.info('@ViewChild form: ', this.myForm.value);
    console.info("namefield: ", this.nameField.value)
    console.info("phoneFieldRef: ", this.phoneFieldRef.nativeElement);
    //f.resetForm();
  }
}

import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { LPDetail } from '../models';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: false })
  form: FormGroupDirective;

  @ViewChild(MatExpansionPanel, { static: false })
  panel: MatExpansionPanel;

  @Output() onNewLP = new EventEmitter<LPDetail>();

  addForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.createGroup();
  }
  processForm() {
    const lp = this.addForm.value as LPDetail;
    this.onNewLP.next(this.addForm.value as LPDetail);
    this.form.resetForm();
    this.panel.close();
  }

  private createGroup(): FormGroup {
    return (this.fb.group({
      title: this.fb.control('', [ Validators.required ]),
      artist: this.fb.control('', [ Validators.required ]),
      rating: this.fb.control('0'),
      image: this.fb.control('')
    }));
  };

}

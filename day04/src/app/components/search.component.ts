import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Moment } from 'moment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  processForm(form: NgForm) {
    console.info('forms: ', form.value);

    const mydate: Moment = form.value['mydate'];

    console.info('date: ', mydate.unix());

    form.resetForm();
  }

}

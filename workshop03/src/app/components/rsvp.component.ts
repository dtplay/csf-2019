import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { NgForm } from '@angular/forms';

import { RSVP } from '../models';

@Component({
  selector: "app-rsvp",
  templateUrl: "./rsvp.component.html",
  styleUrls: ["./rsvp.component.css"]
})
export class RsvpComponent implements OnInit {

  @Output() onNewRSVP = new EventEmitter<RSVP>();

  constructor() {}

  ngOnInit() {}

  processForm(form: NgForm) {
    const values = form.value;
    console.info('values: ', values);
    const rsvp: RSVP = {
      name: values.name,
      phone: values.phone,
      attendingDay: (new Date(values.attendingDay)).getDate(),
      vegetarian: values.vegetarian == "yes",
      comments: values.comments,
      guest: parseInt(values.guests) || 0,
      allergies: []
    };
    for (let i in values)
      if (i.startsWith('allergies-') && values[i])
        rsvp.allergies.push(i)
    form.resetForm();
    this.onNewRSVP.next(rsvp);
  }
}

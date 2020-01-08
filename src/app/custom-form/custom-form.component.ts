import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  medicalForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.medicalForm = new FormGroup({
      nameInput: new FormControl(''),
      raceInput: new FormControl(''),
      ageGroupInput: new FormControl('')
    });
  }

  onSubmit() {
    console.log('Our data is ', this.medicalForm.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss']
})
export class MsgComponent implements OnInit {
  messageForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.messageForm = new FormGroup({
      'subject': new FormControl(null, Validators.required),
      'To': new FormControl(null, [Validators.required, Validators.email]),
      'CC': new FormControl(null, Validators.email),
      'BCC': new FormControl(null, Validators.email),
      'body': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.messageForm.value);
  }

}

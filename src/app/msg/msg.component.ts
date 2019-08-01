import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { draftItem } from './draftItem';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss']
})
export class MsgComponent implements OnInit {
  messageForm: FormGroup;

  constructor(private readonly route: Router) { }

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
    console.log("Message Sent");
    this.route.navigate(['/email-page']);
  }

  public test = [];

  onSave() {
    const draft = new draftItem(this.messageForm.value.To, this.messageForm.value.subject, this.messageForm.value.body);
    this.test.push(draft);
    console.log(this.test);
    this.route.navigate(['/draft']);
  }

}

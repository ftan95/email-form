import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.scss']
})
export class SpamComponent implements OnInit {
  @Input() spamContent;

  constructor() { }

  ngOnInit() {
  }

}

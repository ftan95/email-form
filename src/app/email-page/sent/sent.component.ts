import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  @Input() sentContent;

  constructor() { }

  ngOnInit() {
  }

}

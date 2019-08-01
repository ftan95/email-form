import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  @Input() trashContent;

  constructor() { }

  ngOnInit() {
  }

}

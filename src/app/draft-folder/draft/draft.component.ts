import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {
  @Input() draftContent;

  constructor() { }

  ngOnInit() {
  }

}

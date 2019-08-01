import { Component, OnInit, Input } from '@angular/core';
import { draftItem } from '../msg/draftItem';

@Component({
  selector: 'app-draft-folder',
  templateUrl: './draft-folder.component.html',
  styleUrls: ['./draft-folder.component.scss']
})
export class DraftFolderComponent implements OnInit {
  // @Input() components;

  constructor() { }
  arr = [];

  ngOnInit() {
    const test = new draftItem("Hello", "woaiuwg@oaiugw", "aowiug");
    this.arr.push(test);
  }

  

  

}

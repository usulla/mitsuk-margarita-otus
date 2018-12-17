import { Component, OnInit } from '@angular/core';

import { WORDS } from '../mock-words';
import { Word } from '../word';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {
    words: Word[] = WORDS

  constructor() { }

  ngOnInit() {
  }

}
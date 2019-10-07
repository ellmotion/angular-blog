import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() itemTitle: string;
  @Input() itemContent: string;
  @Input() itemLoveIts: number;
  @Input() itemDate: string;

  constructor() {}

  ngOnInit() {}
  onLoveIts() {
    this.itemLoveIts += 1;
    console.log(this.itemLoveIts);
  }

  onDontLoveIts() {
    this.itemLoveIts -= 1;
    console.log(this.itemLoveIts);
  }
}

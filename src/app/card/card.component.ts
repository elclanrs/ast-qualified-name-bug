import { Component, OnInit, Input } from '@angular/core';

export type CardAvatarSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() avatarSize: CardAvatarSize = 'md';

  constructor() { }

  ngOnInit() {
  }

}

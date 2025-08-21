import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-live-cards',
  imports: [CommonModule],
  templateUrl: './common-live-cards.component.html',
  styleUrl: './common-live-cards.component.scss'
})
export class CommonLiveCardsComponent {
  @Input() sectionData:any

}

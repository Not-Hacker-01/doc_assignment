import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-standard-cards',
  imports: [CommonModule],
  templateUrl: './common-standard-cards.component.html',
  styleUrl: './common-standard-cards.component.scss'
})
export class CommonStandardCardsComponent {
  @Input() sectionData:any
}

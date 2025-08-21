import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-finished-cards',
  imports: [CommonModule],
  templateUrl: './finished-cards.component.html',
  styleUrl: './finished-cards.component.scss'
})
export class FinishedCardsComponent {
  @Input() sectionData:any

}

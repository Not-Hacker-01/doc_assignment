import { CommonModule } from '@angular/common';
import { Component, HostListener,     Input } from '@angular/core';

@Component({
  selector: 'app-common-live-cards',
  imports: [CommonModule],
  templateUrl: './common-live-cards.component.html',
  styleUrl: './common-live-cards.component.scss'
})
export class CommonLiveCardsComponent {
  @Input() sectionData:any
  screenWidth:any
  @HostListener('window:resize')
  onResize(){
    this.screenWidth = window.innerWidth
  }
  constructor(){
    this.screenWidth = window.innerWidth
  }
}

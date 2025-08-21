import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-top-speakers',
  imports: [CommonModule],
  templateUrl: './top-speakers.component.html',
  styleUrl: './top-speakers.component.scss'
})
export class TopSpeakersComponent {
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

import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  imports: [CommonModule ],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
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

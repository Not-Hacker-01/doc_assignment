import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonLiveCardsComponent } from '../shared/common-live-cards/common-live-cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  screenWidth:any
  @HostListener('window:resize')
  onResize(){
    this.screenWidth = window.innerWidth
  }

  constructor(){
    this.screenWidth = window.innerWidth
  }
}

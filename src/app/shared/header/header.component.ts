import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isNavbarCollapsed = true;
  screenWidth :any
  profileImage: string = '/profile.png';
  
  @HostListener('window:resize')
  onResize() {
    this.screenWidth  = window.innerWidth;
  }
  
  constructor(){
    this.screenWidth = window.innerWidth;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}

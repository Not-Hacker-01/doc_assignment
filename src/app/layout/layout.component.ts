import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonLiveCardsComponent } from '../shared/common-live-cards/common-live-cards.component';
import { CommonStandardCardsComponent } from '../shared/common-standard-cards/common-standard-cards.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonLiveCardsComponent, CommonStandardCardsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
}

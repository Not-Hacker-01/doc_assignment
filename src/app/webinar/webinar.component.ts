import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sections } from '../assests/section_data';
import { statusTabs } from '../assests/status_tabs';
import { CommonLiveCardsComponent } from '../shared/common-live-cards/common-live-cards.component';
import { CommonStandardCardsComponent } from '../shared/common-standard-cards/common-standard-cards.component';
import { FinishedCardsComponent } from "../shared/finished-cards/finished-cards.component";

@Component({
  selector: 'app-webinar',
  imports: [CommonModule, CommonLiveCardsComponent, CommonStandardCardsComponent, FinishedCardsComponent,],
  templateUrl: './webinar.component.html',
  styleUrl: './webinar.component.scss'
})
export class WebinarComponent {

  tabList:any = statusTabs
  activeTab:number = 1
  sectionData:any = sections

  onTabClick(index:number){
    this.activeTab = index
  }

  

}

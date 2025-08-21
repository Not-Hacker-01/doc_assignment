import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { sections } from '../assests/section_data';
import { statusTabs } from '../assests/status_tabs';
import { CommonLiveCardsComponent } from '../shared/common-live-cards/common-live-cards.component';
import { FinishedCardsComponent } from "../shared/finished-cards/finished-cards.component";
import { TopSpeakersComponent } from '../shared/top-speakers/top-speakers.component';
import { SocialComponent } from '../shared/social/social.component';
import { TopicsComponent } from '../shared/topics/topics.component';
  
@Component({
  selector: 'app-webinar',
  imports: [CommonModule, CommonLiveCardsComponent,TopicsComponent,
     FinishedCardsComponent,TopSpeakersComponent,SocialComponent],
  templateUrl: './webinar.component.html',
  styleUrl: './webinar.component.scss'
})
export class WebinarComponent {

  tabList:any = statusTabs
  activeTab:number = 1
  sectionData:any = sections
  screenWidth:any

  @HostListener('window:resize')
  onResize(){
    this.screenWidth = window.innerWidth
  }

  constructor(){
    this.screenWidth = window.innerWidth
  }
  onTabClick(index:number){
    this.activeTab = index
  }

  

}

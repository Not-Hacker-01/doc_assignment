  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topics',
  imports: [CommonModule],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent {
  topics:any = [
    {
      name:'Cardiology(12)',
      id:1
    },
    {
      name:'Pain Management(4)',
      id:1
    },
    {
      name:'Primary care(12)',
      id:1
    },
    {
      name:'Infection Medicine(4)',
      id:1
    }
    
  ]
  topics2:any = [
 
    {
      name:'Primary care(12)',
      id:1
    },
    {
      name:'Infection Medicine(4)',
      id:1
    },
    {
      name:'Cardiology(12)',
      id:1
    },
    {
      name:'Pain Management(4)',
      id:1
    },
    
  ]

}

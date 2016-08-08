import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'interest',
  templateUrl: 'interest.component.html'
})

export class InterestComponent {
  private heading:string;
  private hobbyTitle1: string;
  private hobbyText1: string;
  private hobbyTitle2: string;
  private hobbyText2: string;
  

  constructor(){
    this.heading = 'Interest';
    this.hobbyTitle1 = 'BBQ Grill Master';
    this.hobbyText1 = 'All year long I grill and smoke food on seven barbecues in mu garden. I am a certified grill master from Weber. Even made it to Dutch tv once.';
    this.hobbyTitle2 = 'Globe trotter';
    this.hobbyText2 = '46 countries and still counting. I love to travel, meet new people. I guess me speaking 5 languages says a lot about my interest in other cultures.';
    
  }
}
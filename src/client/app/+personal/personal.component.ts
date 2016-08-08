import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'personal',
  templateUrl: 'personal.component.html'
})

export class PersonalComponent {
  private name:string;
  private title:string;
  private phone:string;
  private email:string;

  constructor(){
    this.name = 'Julia Rietveld';
    this.title = 'front end developer';
    this.phone = '06 2874 2275';
    this.email = 'info@juliarietveld.nl';
  }
}

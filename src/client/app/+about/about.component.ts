import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html'
})

export class AboutComponent {
	private heading: string;
  private introText:string;


  constructor(){
  	this.heading = 'About';
    this.introText = 'My name is Julia Rietveld and I am a front end web developer from The Netherlands. Front end is my passion. I love making cool and sexy websites with user friendly interfaces. I am a big fighter for accessibility of the web.';  
  }
}
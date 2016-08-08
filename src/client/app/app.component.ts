import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import {PersonalComponent} from './+personal/personal.component';
import {AboutComponent} from './+about/about.component';
import {InterestComponent} from './+interest/interest.component';
import {WorkComponent} from './+work/work.component';
import {EducationComponent} from './+education/education.component';
import {SkillsetComponent} from './+skillset/skillset.component';
import {ProjectsComponent} from './+projects/projects.component';
import {FooterComponent} from './+footer/footer.component';

import { Config, NameListService, NavbarComponent, ToolbarComponent } from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [NameListService, HTTP_PROVIDERS],
  template: `
    	<personal></personal>
    	<about></about>
    	<interest></interest>
    	<work></work>
    	<education></education>
    	<skillset></skillset>
    	<projects></projects>
    	<myFooter></myFooter>
    	`,
  directives: [ROUTER_DIRECTIVES, PersonalComponent, AboutComponent, InterestComponent, WorkComponent, EducationComponent, SkillsetComponent, ProjectsComponent, FooterComponent]
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}

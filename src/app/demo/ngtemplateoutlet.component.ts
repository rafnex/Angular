import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplateoutlet',
  templateUrl: './ngtemplateoutlet.component.html',
  styleUrls: ['./ngtemplateoutlet.component.scss']
})
export class NgtemplateoutletComponent {
  showBasicTemplate = true;
  selectedTemplate?: TemplateRef<any>;
}

import { Component } from '@angular/core';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-ngcontent',
  templateUrl: './ngcontent.component.html',
  styleUrls: ['./ngcontent.component.scss']
})
export class NgcontentComponent {
  defaultBoxMessage = 'This is a box';

  counter$ = timer(0,1000).pipe(map(_ => new Date()));

  showMessage(){
    alert('Help!');
  }
}

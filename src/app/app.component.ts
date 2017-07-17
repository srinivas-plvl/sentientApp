import { Component } from '@angular/core';
import { ApplicationService } from './services/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(
    private applicationService:ApplicationService
  ){}
}

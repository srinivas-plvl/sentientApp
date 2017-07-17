import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
     private applicationService:ApplicationService
     
  ) { }

  ngOnInit() {
  }

}

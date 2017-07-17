import { Component, OnInit, Directive } from '@angular/core';
import { ApplicationService } from '../services/application.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
@Directive({selector: 'canvas[baseChart]'})
export class DashboardComponent implements OnInit {
  data:any = [];
  constructor(
    private applicationService: ApplicationService
  ) { }

  ngOnInit() {
    this.applicationService.setPage('dashboard');
  }

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sustained Interruption' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Momentary Interruption' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Fault Without Interruption' },
    { data: [12, 58, 37, 19, 20, 67, 80], label: 'Interruption Without Fault' }
  ];
  public lineChartLabels: Array<any> = ['July 1st', 'July 2nd', 'July 3rd', 'July 4th', 'July 5th', 'July 6th', 'July 7th'];
  public lineChartType: string = 'line';
  public pieChartType: string = 'pie';

  // Pie
  public pieChartLabels: string[] = ['Online', 'Offline', 'Unregistered', 'Intermittent'];
  public pieChartData: number[] = [300, 400, 100, 200];

  public randomizeType(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }


  public lineChartOptions: any = {
    responsive: true
  };
  // public lineChartColors:Array<any> = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];
  public lineChartLegend: boolean = true;


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }





}

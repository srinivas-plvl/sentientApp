import { Component, OnInit, OnChanges } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { Http } from "@angular/http";
import { Utility } from '../services/utility';

@Component({
    selector: 'app-device-management',
    templateUrl: './device-management.component.html',
    styleUrls: ['./device-management.component.css']
})
export class DeviceManagementComponent implements OnInit {


    tab: number = 1;

    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

    constructor(
        private applicationService: ApplicationService,
        private http: Http,
        private utility:Utility

    ) { }

    ngOnChanges(){
       alert();
    }

    ngOnInit() {
        this.applicationService.setPage('devices');
        this.http.get("assets/data.json")
            .subscribe((data) => {
                   this.utility.diveceResponse(data.json());
                // setTimeout(() => {
                //     this.utility.diveceResponse(data.json());
                //     //this.data = data.json();
                // }, 1000);
            });
    }

    changeTab(tabIndex: number, event: any) {
        event.preventDefault();

        this.tab = tabIndex;
    }
    isTabSelected(tabIndex: number) {
        return this.tab === tabIndex;
    }


}

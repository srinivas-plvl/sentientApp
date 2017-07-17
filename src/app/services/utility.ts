import { Injectable } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import * as _ from 'underscore';

@Injectable()
export class Utility {
    constructor(
        private applicationService: ApplicationService
    ) { }
    response = [];
    diveceInfo = [];

    diveceResponse(resp) {
        this.applicationService.setResponse(resp);
        this.response = resp;
        //this.getSerial();
    }
    

    getSerial() {
        var self = this;
        
      _.each(this.response, function (item, index) {
            let serials = {
                id: index,
                serialName: item.serial
            };
             self.diveceInfo.push(serials);
        })
        console.log(this.diveceInfo);
    }
}

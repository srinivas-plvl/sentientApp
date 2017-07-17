import { Injectable } from '@angular/core';


@Injectable()
export class ApplicationService {

  currentPage:string;
  responseData = [];
  constructor() { }

  setPage(page: string):void {
    this.currentPage = page;
  }

  getPage(){
    return this.currentPage;
  }

  setResponse(resp){
        this.responseData = resp;
    }

    getResponse(){
        return this.responseData;
    }

}

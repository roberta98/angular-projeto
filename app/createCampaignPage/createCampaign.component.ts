import { Component, OnInit } from "@angular/core";
import { ConfigService } from '../config.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'create-campaign',
    templateUrl : './createCampaign.component.html'
})

export class CreateCampaing implements OnInit{ 

    name:string;
    description:string;
    dateBegin:string;
    dateEnd:string;
    data: any;
    id:any;
    url = 'http://50.116.18.236:5000/api/campaign';
    constructor(private http :  HttpClient){ }

    ngOnInit(){ }
 
    getTitle(t){  
        this.name = t;
    }
    getDescription(t){
        this.description = t;   
    }
    getDateBegin(t){
        this.dateBegin = t;
    }
    getDateEnd(t){ 
        this.dateEnd = t;
    }
    createCampaign(){
        this.data = {
            "imgUrl": "",
            "title" : this.name,
            "description" : this.description,
            "dateBegin": this.dateBegin + " 00:00:00.000Z",
            "dateEnd" : this.dateEnd + " 00:00:00.000Z",
            "actions" : []
        }
        var httpheaders = {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            })
          };
       return this.http.post(this.url, JSON.stringify(this.data), httpheaders)
                .subscribe(data => {
                    console.log(data)
                })
    }

}

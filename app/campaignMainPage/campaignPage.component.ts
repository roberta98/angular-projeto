import { Component, OnInit } from "@angular/core";
import { ConfigService } from '../config.service';

@Component({
    selector: 'campaign-index',
    templateUrl : './campaignPage.component.html' 
})

export class CampaignPage implements OnInit{ 
    
    campaigns: Array<any>;
    
    constructor(private campaign: ConfigService){

    }
    ngOnInit(){
       this.listar();
       
    }
    listar(){
        this.campaign.getCampaigns()
            .subscribe(dados => this.campaigns = dados);
        
    }
}
 
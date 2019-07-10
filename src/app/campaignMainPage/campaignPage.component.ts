import { Component, OnInit } from "@angular/core";
import { ConfigService } from '../config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'campaign-index',
    templateUrl: './campaignPage.component.html'
})

export class CampaignPage implements OnInit { 

    campaigns = [];
    id;
    message ="";

    constructor(
        private configService: ConfigService,
        private router: Router
        ) {

    }
    ngOnInit() {
        this.listar();
    }

    deleteCampaign(id){
        this.id = id
        this.configService.deleteCampaign(this.id)
            .subscribe(
                data => {
                    this.message = "Campaign Deleted";
                    alert(this.message)
                    
                },
                err => {
                    this.message = "Something went wrong, try again in a few minutes";
                    alert(this.message)
                    
                }
                
            )
        
    }

    listar() {
        this.configService.getCampaigns()
            .subscribe(
                dados => {
                    this.campaigns = JSON.parse(JSON.stringify(dados));
                },
                err => {
                    console.log("Something went wrong, try again in a few minutes", err);
                }
            );
    }
}

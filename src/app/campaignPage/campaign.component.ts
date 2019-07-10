import { Component } from "@angular/core";
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "campaign",
    templateUrl: "./campaign.component.html"
})

export class Campaign {

    campaign = [];
    id;
    message = "";

    constructor(
        private configService: ConfigService,
        private route: ActivatedRoute
    ) {
        this.id = this.route.snapshot.params['id'];
        this.configService.getCampaign(this.id).subscribe(
            dados => {
                this.campaign = JSON.parse(JSON.stringify(dados));
            },
            err => {
                this.message = "Campaign not found.";
            }
        );
    }
 
    ngOnInit() {   
        this.getOneCampaign()
    }

    getOneCampaign(){
        this.configService.getCampaign(this.id)
            .subscribe(dados => {
                this.campaign = JSON.parse(JSON.stringify(dados))
            })
        

    }
    
    createCampaign() {
        this.configService.putCampaign(this.id, this.campaign)
            .subscribe(
                data => {
                    this.message = "Mensagem de sucesso!";
                    console.log(this.campaign)
                },
                err => {
                    this.message = "Mensagem de erro!";
                    alert(this.message)
                }
            );
    }
}
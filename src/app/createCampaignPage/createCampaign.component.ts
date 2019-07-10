import { Component, OnInit } from "@angular/core";
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';


@Component({
    selector: 'create-campaign',
    templateUrl: './createCampaign.component.html'
}) 

export class CreateCampaing implements OnInit {
    image;
    myReader:FileReader

    message = "";

    constructor(
        private configService: ConfigService,
        private router: Router
    ) {

     }

    ngOnInit() { }

    campaign = {
        title: "",
        description: "",
        dateBegin: "",
        dateEnd: "",
        imgUrl: "",
    }

    changeListener($event) : void {
        this.readThis($event.target);
    }
    
    readThis(image: any): void {
        var file:File = image.files[0];
        this.myReader = new FileReader();

        this.myReader.onloadend = (e) => {
            this.image = this.myReader.result;
            this.campaign.imgUrl = this.myReader.result.toString()
        }
        this.myReader.readAsDataURL(file);
    }
    
  

    createCampaign() {
       
        this.configService.postCampaign(this.campaign)
            .subscribe(
                data => {
                    this.message = "Campaign Created";
                    alert(this.message)
                    this.router.navigate(['']);
                },
                err => {
                    this.message = "Something went wrong, try again in a few minutes";
                    alert(this.message)
                    console.log(this.campaign)
                    this.router.navigate(['']);
                }
            );
    }

}

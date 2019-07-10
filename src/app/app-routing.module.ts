import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CampaignPage } from './campaignMainPage/campaignPage.component';
import { CreateCampaing } from "./createCampaignPage/createCampaign.component";
import { CreateAction } from "./createActionPage/createAction.component";
import { Campaign } from "./campaignPage/campaign.component"; 


const routes : Routes = [ 
  
    {
        path: '',
        component: CampaignPage
    },
    {
        path: "createCampaigns",
        component : CreateCampaing
    },
    {
        path: "createAction/:id",
        component: CreateAction
    },
    {
        path: "campaign/:id",
        component: Campaign
    }

];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
}) 

export class AppRoutingModule  {

}
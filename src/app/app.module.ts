import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCampaing } from "./createCampaignPage/createCampaign.component";
import { CampaignPage } from "./campaignMainPage/campaignPage.component";
import { CreateAction } from "./createActionPage/createAction.component";
import { Campaign } from "./campaignPage/campaign.component";
import { ConfigService } from "./config.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CreateCampaing,
    CampaignPage,
    CreateAction,
    Campaign

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }

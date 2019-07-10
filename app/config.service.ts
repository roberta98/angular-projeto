import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



export class ConfigService {

  url = 'http://50.116.18.236:5000/api/campaign';
  
  constructor(private http: HttpClient) { }

  getCampaigns() {
    return this.http.get<any>(this.url); //`${this.url}`
  }
  // postCampaigns(data){
  //   console.log(data)
  //   return this.http.post(this.url, JSON.stringify(data), requestOptions); 
  // }
}

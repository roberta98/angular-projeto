import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
} 

export class ConfigService {

  url = 'http://50.116.18.236:5000/api';

  constructor(private http: HttpClient) { }

  //get all campaigns
  getCampaigns() {
    const url = this.url + "/campaign";
    return this.http.get(url, headers);
  }

  //get one campaign
  getCampaign(id) {
    const url = this.url + `/campaign/${id}`;
    return this.http.get(url, headers);
  }

  //insert campaign
  postCampaign(data) {
    const url = this.url + "/campaign";
    return this.http.post(url, data, headers);
  }

  //update campaign
  putCampaign(id, data) {
    const url = this.url + `/campaign/${id}`;
    return this.http.put(url, data, headers);
  }

  //delete campaign
  deleteCampaign(id) {
    const url = this.url + `/campaign/${id}`;
    return this.http.delete(url, headers);
  }

}

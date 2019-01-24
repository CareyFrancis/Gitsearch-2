import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username : string;
  private clientid = '76aa9b3fe1cb68f9a933';
  private clientsecret = '570f22af50e87b1f3efd308f341ae93b3ca27086'


  constructor(private http:Http) {
    console.log("service is ready hoe");
    this.username = 'CareyFrancis'
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id" + this.clientid + "&client_secret=" + this.clientsecret);
   }
}

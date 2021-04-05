import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private user!: string;
  private apiKey = environment.searchApiKey

  constructor(private http: HttpClient) {
    this.user = 'Paul-Ngigi'
  }

  getUser(): Observable<any> {
    return this.http.get("https://api.github.com/users/" + this.user + '?access_token='+ this.apiKey)
  }

  getRepos(): Observable<any>{
    return this.http.get("https://api.github.com/users/" + this.user + "/repos?access_token" + this.apiKey)
  }

  profileUpdate(username: any){
    this.user = username;
  }
}

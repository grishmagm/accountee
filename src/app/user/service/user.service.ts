import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private ROOT_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

   register(user : any){
 return this.http.post<any>(`${this.ROOT_URL}/user`,user);
   }
login(user:any){
 return this.http.post<any>(`${this.ROOT_URL}/user/login`,user);
   }
   create(user : any){
    return this.http.post<any>(`${this.ROOT_URL}/vendor`,user);
      }
      createclient(user : any){
        return this.http.post<any>(`${this.ROOT_URL}/company`,user);
          }
          createinvoice(user : any){
            return this.http.post<any>(`${this.ROOT_URL}/invoice`,user);
              }
              showvendore(user : any){
                return this.http.get<any>(`${this.ROOT_URL}/vendor/show`,user);
                  }
                  getVendor(): Observable<Vendor[]> {
                    return this.http.get<Vendor[]>(`${this.ROOT_URL}/vendor/show`);
                  }
                  createitem(user : any){
                    return this.http.post<any>(`${this.ROOT_URL}/item`,user);
                      }
                
            
}

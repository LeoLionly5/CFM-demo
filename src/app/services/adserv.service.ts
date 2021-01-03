import { Injectable } from '@angular/core';
import { Addata } from '../datamodel/addata';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdservService {
  private api_url = 'api/Addata';
  constructor(private http:HttpClient) { }

  getAddata(): Observable<Addata[]> {
    return this.http.get<Addata[]>(this.api_url);
  }

  insertAddata(addata : Addata){
    return this.http.post(this.api_url, addata);
  }

  changeAddata(addata : Addata){
    return this.http.put(this.api_url+'/'+ addata.id, addata);
  }

  deleteAddata(id : number){
    return this.http.delete(this.api_url+'/'+ id);
  }
}

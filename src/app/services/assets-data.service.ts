import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AssetsDataService {

  constructor(private http: HttpClient) { }
  asset(){
    return this.http.get('http://localhost:3000/productlist');
  }
  postAsset(data: any){
    return this.http.post<any>('http://localhost:3000/productlist',data);
  }
}

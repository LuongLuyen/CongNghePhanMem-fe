import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const api ="http://localhost:5000/api/gym"
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  private dataSubject = new BehaviorSubject<string>('');

  setData(data: string) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
  getAllGym():any {
    return this.http.get<any>(api);
  }
  getByIdGym(id:string):any {
    if (id){
      return this.http.get<any>(api+"/"+id);
    }
  }
}

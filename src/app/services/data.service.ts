import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


const api ="http://localhost:5000/api/gym"
const apiP ="http://localhost:5000/api/register"
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
    return this.http.get<any>(api)
  }
  getAllPackage():any {
    return this.http.get<any>(apiP).pipe(
      catchError((error: HttpErrorResponse):any => {
        alert("Server mất kết nối")
      })
    )
  }
  getByIdGym(id:string):any {
    if (id){
      return this.http.get<any>(api+"/"+id).pipe(
        catchError((error: HttpErrorResponse):any => {
          alert("Server mất kết nối")
        })
      )
    }
  }
  postPackage(data:any):any {
    return this.http.post<any>(apiP,data).pipe(
      catchError((error: HttpErrorResponse):any => {
        alert("Server mất kết nối")
      })
    )
  }
  updatePackage(data:any,id:string):any {
    return this.http.put<any>(apiP+"/"+id,data).pipe(
      catchError((error: HttpErrorResponse):any => {
        alert("Server mất kết nối")
      })
    )
  }
  deletePackage(id:string):any {
    return this.http.delete<any>(apiP+"/"+id).pipe(
      catchError((error: HttpErrorResponse):any => {
        alert("Server mất kết nối")
      })
    )
  }
}
function showSnackbar() {
  throw new Error('Function not implemented.');
}


import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  serviceURL =
    'https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/1nDLOS0AkEuUUyy4CE6SsO' +
    '?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412';
  constructor(private http: HttpClient, protected localStorage: LocalStorage) {}
  getResume(): Observable<any> {
    if (window.navigator.onLine) {
      return this.http.get<any>(this.serviceURL).pipe(
        map(response => {
          this.localStorage.setItem('resumeData', response).subscribe(() => {});
          return response;
        }),
        catchError(error => {
          console.log(error);
          return error;
        })
      );
    } else {
      return this.localStorage.getItem<any>('resumeData').pipe(
        map(response => {
          if (!response) {
            console.log('no-data');
          } else {
            return response;
          }
        }),
        catchError(er => {
          console.log(er);
          return er;
        })
      );
    }
  }
}

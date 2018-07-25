import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  serviceURL =
    'https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/557E2oqinYcsgIi4EegKaW' +
    '?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412';
  aboutmeData;
  constructor(private http: HttpClient, protected localStorage: LocalStorage) {}
  getAboutMeData(): Observable<any> {
    if (window.navigator.onLine) {
      return this.http.get<AboutMeObj>(this.serviceURL).pipe(
        map(resp => {
          this.aboutmeData = resp;
          this.localStorage.setItem('aboutmeData', resp).subscribe(() => {});
          // localStorage['aboutmeData'] = JSON.stringify(response);
          return resp;
        }),
        catchError(error => {
          console.log(error);
          return error;
        })
      );
    } else {
      return this.localStorage.getItem<AboutMeObj>('aboutmeData').pipe(
        map(response => {
          if (!response) {
            console.log('no-data');
          } else {
            this.aboutmeData = response;
          }
        }),
        catchError(er => {
          console.log(er);
          return er;
        })
      );
    }
  }
  getAboutMeDescription(): string {
    return this.aboutmeData.fields.description;
  }
  getSpecializationArryObj(): Specialization[] {
    return this.aboutmeData.fields.specialization;
  }
  getSkills(): string {
    return this.aboutmeData.fields.skills;
  }
}

interface AboutMeObj {
  sys?: Sys;
  fields?: Fields;
}

interface Sys {
  type?: string;
  linkType?: string;
  id?: string;
  space?: Space;
  createdAt?: string;
  updatedAt?: string;
  environment?: Environment;
  revision?: number;
  contentType?: ContentType;
  locale?: string;
}

interface Space {
  sys?: Sys;
}

interface Environment {
  sys?: Sys;
}

interface ContentType {
  sys?: Sys;
}

interface Fields {
  description?: string;
  specialization?: Specialization[];
  skills?: string;
}

interface Specialization {
  title?: string;
  detail?: string;
  imageURL?: string;
}

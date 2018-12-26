import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(public http: HttpClient) { }

  getAchievements(): Observable<any> {
    const url = 'https://teamtreehouse.com/eaglejs.json';
    return this.http.get<any>(url);
  }
}

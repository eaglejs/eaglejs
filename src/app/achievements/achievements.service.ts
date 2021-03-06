import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamTreeHouseProfile } from '../models/team-treehouse-profile';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(public http: HttpClient) { }

  getAchievements(): Observable<TeamTreeHouseProfile> {
    const url = 'https://teamtreehouse.com/eaglejs.json';
    return this.http.get<TeamTreeHouseProfile>(url);
  }
}

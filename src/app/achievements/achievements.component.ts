import { Component, OnInit, OnDestroy } from '@angular/core';

import { AchievementsService } from './achievements.service';
import { TeamTreeHouseProfile } from '../models/team-treehouse-profile';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
  host: {
    class: 'main-content'
  }
})
export class AchievementsComponent implements OnInit {
  profile: TeamTreeHouseProfile;

  constructor(private achievementsService: AchievementsService) { }

  ngOnInit() {
    this.getAchievements();
  }

  getAchievements(): void {
    this.achievementsService.getAchievements().subscribe(profile => this.profile = profile);
  }
}

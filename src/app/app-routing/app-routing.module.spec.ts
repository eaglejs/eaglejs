import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SocialCodingComponent } from '../social-coding/social-coding.component';
import { AchievementsComponent } from '../achievements/achievements.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'social-coding', component: SocialCodingComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

describe('AppRoutingModule', () => {
  let location: Location, router: Router, fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        HomeComponent,
        PortfolioComponent,
        SocialCodingComponent,
        AchievementsComponent,
        NotFoundComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    console.log(routes);
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('fakeAsync works', fakeAsync(() => {
    let done = false;
    const promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });

    promise.then(() => {
      done = true;
    });
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('should navigate to "/"', fakeAsync(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/');
    });
  }));

  it('should navigate to "/portfolio"', fakeAsync(() => {
    router.navigate(['portfolio']).then(() => {
      expect(location.path()).toBe('/portfolio');
    });
  }));

  it('should navigate to "/social-coding"', fakeAsync(() => {
    router.navigate(['social-coding']).then(() => {
      expect(location.path()).toBe('/social-coding');
    });
  }));

  it('should navigate to "/achievements"', fakeAsync(() => {
    router.navigate(['achievements']).then(() => {
      expect(location.path()).toBe('/achievements');
    });
  }));

  it('should navigate to "/404"', fakeAsync(() => {
    router.navigate(['404']).then(() => {
      expect(location.path()).toBe('/404');
    });
  }));

  it('should navigate to "/404" if url is bogus', fakeAsync(() => {
    router.navigate(['bogus-url']).then(() => {
      expect(location.path()).toBe('/404');
    });
  }));
});

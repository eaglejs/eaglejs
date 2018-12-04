import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCodingComponent } from './social-coding.component';

describe('SocialCodingComponent', () => {
  let component: SocialCodingComponent;
  let fixture: ComponentFixture<SocialCodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialCodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

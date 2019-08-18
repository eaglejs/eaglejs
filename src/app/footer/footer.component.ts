import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  activePath: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isActive();
  }

  isActive(): void {
    console.log(this.router.url.split('/')[1]);
    console.log(window.location.href);
  }
}

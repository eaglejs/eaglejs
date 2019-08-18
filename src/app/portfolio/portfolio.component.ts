import { Component, OnInit } from '@angular/core';
import PortfolioData from '../../assets/data/portfolioData.json';
import { Portfolio } from '../models/portfolio.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  host: {
    class: 'main-content'
  }
})
export class PortfolioComponent implements OnInit {

  portfolios: Portfolio[] = PortfolioData;

  constructor() { }

  ngOnInit() {
  }

}

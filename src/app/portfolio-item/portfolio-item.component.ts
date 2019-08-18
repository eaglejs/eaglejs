import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PortfolioData from '../../assets/data/portfolioData.json';
import { Portfolio } from '../models/portfolio.js';

import * as _ from 'lodash';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
  host: {
    class: 'main-content'
  }
})
export class PortfolioItemComponent implements OnInit {

  portfolios: Portfolio[] = PortfolioData;
  portfolio: Portfolio;

  constructor(private router: Router) { }

  ngOnInit() {
    this.setPortfolio();
  }

  setPortfolio(): void {
    const route = this.router.url;

    this.portfolio = _.find(this.portfolios, (portfolio) => route === portfolio.route);

  }
}

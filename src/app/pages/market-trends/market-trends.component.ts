import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-market-trends',
  standalone: true,
  imports: [NgxChartsModule,Navbar2Component,FooterComponent,RouterOutlet ],
  templateUrl: './market-trends.component.html',
  styleUrl: './market-trends.component.css'
})
export class MarketTrendsComponent {
  constructionData = [
    { "name": "Past", "series": [
      { "name": "2015", "value": 200 },
      { "name": "2016", "value": 250 },
      { "name": "2017", "value": 280 },
      { "name": "2018", "value": 300 },
    ]},
    { "name": "Present", "series": [
      { "name": "2019", "value": 350 },
      { "name": "2020", "value": 400 },
      { "name": "2021", "value": 450 },
      { "name": "2022", "value": 500 },
    ]},
    { "name": "Future", "series": [
      { "name": "2023", "value": 550 },
      { "name": "2024", "value": 600 },
      { "name": "2025", "value": 650 },
      { "name": "2026", "value": 700 },
    ]}
  ];

  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#C7B42C', '#AA4643']
  };
}

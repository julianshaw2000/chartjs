import { Component } from '@angular/core';
import { ChartBaseComponent } from '../chart-base.component';
import { ChartService } from '../chart.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})



export class BarChartComponent extends ChartBaseComponent {

  public constructor(public override service: ChartService) {
    super(service);
    Chart.register(...registerables);

  }

  override createChart(labeldata: any, realdata: any, colordata: any) {
    this.chart = new Chart('BarChart', {
      type: 'bar', //this denotes tha type of chart
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'No of sales',
            data: realdata,
            backgroundColor: colordata,
            barThickness: 40,
          },
        ],
      },

      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            display: false,
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
      },

    });
  }
}

import { Component } from '@angular/core';
import { ChartBaseComponent } from '../chart-base.component';
import { ChartService } from '../chart.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})



export class LineChartComponent extends ChartBaseComponent {

  public constructor(public override service: ChartService) {
    super(service);
    Chart.register(...registerables);

  }
  override createChart(labeldata: any, realdata: any, colordata: any) {
    this.chart = new Chart('LineChart', {
      type: 'line', //this denotes tha type of chart
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'No of sales',
            data: realdata,
            backgroundColor: colordata,
          },
        ],
      },
      options: {
        aspectRatio: 2,
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            display: false,
          },
          title: {
            display: true,
            text: 'Line Chart'
          }
        }
      },
    });
  }
}

import { Component } from '@angular/core';
import { ChartBaseComponent } from '../chart-base.component';
import { ChartService } from '../chart.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css'
})



export class DoughnutChartComponent extends ChartBaseComponent {

  chartType: string = 'doughnut';

  public constructor(public override service: ChartService) {
    super(service);
    Chart.register(...registerables);

  }

  override createChart(labeldata: any, realdata: any, colordata: any) {
    this.chart = new Chart('DoughnutChart', {
      type: 'doughnut', //this denotes tha type of chart
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
            display: true,
          },
          title: {
            display: true,
            text: ' Donought Chart'
          }
        }
      },
    });
  }
}

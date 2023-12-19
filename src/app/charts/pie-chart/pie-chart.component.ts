import { Component } from '@angular/core';
import { ChartBaseComponent } from '../chart-base.component';
import { ChartService } from '../chart.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})



export class PieChartComponent extends ChartBaseComponent {

  public constructor(public override service: ChartService) {
    super(service);
    Chart.register(...registerables);

  }

  override createChart(labeldata: any, realdata: any, colordata: any) {
    this.chart = new Chart('PieChart', {
      type: 'pie', //this denotes tha type of chart
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'No of sales',
            data: realdata,
            backgroundColor: colordata,
            hoverOffset: 4,
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
            text: 'Pie Chart'
          }
        }
      },
    });
  }
}

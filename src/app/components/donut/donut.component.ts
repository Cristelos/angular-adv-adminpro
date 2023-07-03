import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  //Inputs
  @Input() title: string = 'Untitle';
  
  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'label1', 'label1', 'label1' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
    ]
  };

public doughnutChartType: ChartType = 'doughnut';

}

import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {

  //info data
  public labels1: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
  public data1:ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [ {  data: [ 40, 10, 44],
                   backgroundColor: ['#F72585','#3A0CA3','#4CC9F0']
                },
              ]
  };

  public labels2: string[] = [ 'Menús', 'Platos', 'Bebidas' ];
  public data2:ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [ {  data: [ 65, 33, 12],
                   backgroundColor: ['#F72585','#3A0CA3','#4CC9F0']
                },
              ]
  };

  public labels3: string[] = [ 'Menús', 'Platos', 'Bebidas' ];
  public data3:ChartData<'doughnut'> = {
    labels: this.labels3,
    datasets: [ {  data: [ 25, 14, 50],
                   backgroundColor: ['#F72585','#3A0CA3','#4CC9F0']
                },
              ]
  };

  public labels4: string[] = [ 'Luz', 'Agua', 'Gas' ];
  public data4:ChartData<'doughnut'> = {
    labels: this.labels4,
    datasets: [ {  data: [ 40, 55, 10],
                   backgroundColor: ['#F72585','#3A0CA3','#4CC9F0'],
                },
              ]
  };
  
 }

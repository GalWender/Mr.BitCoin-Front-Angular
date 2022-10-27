import { Chart } from 'chart.js';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  @Input() chartX!: Array<string>
  @Input() chartY!: Array<number> 
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("line", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.chartX, 
	       datasets: [
          {
            label: "Rates",
            //values on Y-Axis
            data: this.chartY,
            backgroundColor: 'limegreen',
            borderColor:'limegreen',
            pointBackgroundColor:'green',
          },
          // {
          //   label: "Profit",
          //   data: ['542', '542', '536', '327', '17',
					// 				 '0.00', '538', '541'],
          //   backgroundColor: 'limegreen'
          // }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}

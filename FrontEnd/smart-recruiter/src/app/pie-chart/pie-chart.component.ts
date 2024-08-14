import { Component, OnInit, AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import { SlidersService } from '../services/sliders.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  data: any;
  options: any;
  value: number = 0;
  chart: any;
  CurrentSection:any;


  // latestValues: { [key: string]: number } = {};

  constructor(private slidersService: SlidersService) { }

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: []
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          display: false
        }
      }
    };
  }

    ngAfterViewInit(): void {
      if (!this.chart) {
      const canvas = this.canvasRef.nativeElement;
      this.chart = new Chart(canvas, {
        type: 'pie',
        data: this.data,
        options: this.options
      });

    this.slidersService.sliderValue$.subscribe(values => {
      console.log('Received values from sliderValue$', values);
      this.updateChartData(values);
    });
  }
}

  updateChartData(values: { [name: string]: number }): void {
    console.log('Updating chart data with values', values);
    this.data.labels = Object.keys(values);
    this.data.datasets[0].data = Object.values(values);
    
    const colorPalette = ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4CAF50','#FF8A80','#FFD180','#A1887F','#90A4AE','#FF6652'];
    this.data.datasets[0].backgroundColor = colorPalette.slice(0, this.data.labels.length);
    this.data.datasets[0].hoverBackgroundColor = colorPalette.slice(0, this.data.labels.length);

    this.chart.update();
  }

  navigateToSection(name: string): void {
    

  }
}




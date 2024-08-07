// import { Component, OnInit } from '@angular/core';
// import{SlidersService} from '../sliders.service';


// @Component({
//   selector: 'app-pie-chart',
//   templateUrl: './pie-chart.component.html',
//   styleUrls: ['./pie-chart.component.scss']
// })
// export class PieChartComponent implements OnInit{
//   data:any;
//   options:any;
//   value: number = 0;



//   const documentStyle = getComputedStyle(document.documentElement);
//   const textColor = documentStyle.getPropertyValue('--text-color');


//   data =Data {
//     labels: ['Educational background', 'Family Background', 'Communication skills'],
//     datasets: [
//         {
//             data: [540, 325, 702],
//             backgroundColor: [DocumentType.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
//             hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
//         }
//     ]
// };

// constructor(private slidersService: SlidersService) { }

// ngOnInit(): void {
//     this.slidersService.sliderValue$.subscribe(values => {
//         this.updateChartData(values);
//       });
//     }



//   updateChartData(values: { [key: string]: number }): void {
//     this.data.labels = Object.keys(values);
//     this.data.datasets[0].data = Object.values(values);
//     // Set appropriate colors
//     this.data.datasets[0].backgroundColor = ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0']; // Customize colors as needed
//     this.data.datasets[0].hoverBackgroundColor = ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0']; // Customize colors as needed
//   }

  


   

    

//     this.options = {
//         plugins: {
//             legend:{
            
//                 // labels: {
//                     // usePointStyle: true,
//                     // color: textColor
//                     display:false
//                 }
//             }
//         }
        
//     };

//   }



import { Component, OnInit } from '@angular/core';
import { SlidersService } from 'src/app/sliders.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  data: any;
  options: any;
  value: number = 0;

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

    this.slidersService.sliderValue$.subscribe(value => {
      this.updateChartData(value);
    });
  }

  updateChartData(value: { [name: string]: number }): void {
    this.data.labels = Object.keys(value);
    this.data.datasets[0].data = Object.values(value);
    // Set appropriate colors
    this.data.datasets[0].backgroundColor = ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0']; // Customize colors as needed
    this.data.datasets[0].hoverBackgroundColor = ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0']; // Customize colors as needed
  }
}

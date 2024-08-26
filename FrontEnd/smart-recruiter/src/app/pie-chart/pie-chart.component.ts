import { Component, OnInit, AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import { SlidersService } from '../services/sliders.service';
import { Chart } from 'chart.js';
import { PieChartService } from './pie-chart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit {
  // for tab view
  public tabs: { title: string, content: string, isDisabled : boolean, data : any }[] = [];
  //For query parameters
  public jobId : number | undefined;
  public candidateId : number | undefined;

  constructor(private PieChartSVC : PieChartService, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.initializer(); 
  }

  public initializer() : void {
    // Fetch the query parameter
    this.route.queryParams.subscribe(params => {
      this.jobId = params['jobId'];
      this.candidateId = params['candidateId'];
    });

    this.tabs = [
      { title: '1st', content: 'Tab 1 Content', isDisabled : false, data : {} },
      { title: '2nd', content: 'Tab 2 Content', isDisabled : false, data : {} },
      { title: '3rd', content: 'Tab 3 Content', isDisabled : false, data : {} }
    ];

    // fetch the marks of the candidate for all roles (1st interview, 2nd interview, etc)

    const roleIds : number[] = [1, 2, 3];

    this.tabs.forEach((tab, index) => {
      this.PieChartSVC.getMarks(this.candidateId, this.jobId, index+1).subscribe((res) => {
        if (res.finalScore === 0){
          this.tabs[index].isDisabled = true;
        }
        else{
          //create the data for pie chart
          const data = {
            labels: ['Attitude and Discipline', 'Technical Knowledge', 'Education Background', 'Professional Qualification', 'Career Background', 'Communication Skills', 'Cultural Fit', 'Family Background', 'IQ/Creativity/Problem Solving Skills', 'Management Skills'],
            datasets: [
              {
                data: [res.attitudeAndDisciplineParticipation, res.technicalKnowledgeParticipation, res.educationBackgroundParticipation, res.professionalQualificationParticipation, res.careerBackgroundParticipation, res.communicationSkillsParticipation, res.culturalFitParticipation, res.familyBackgroundParticipation, res.iqCreativityProblemSolvingSkillsParticipation, res.managementSkillsParticipation],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4CAF50','#FF8A80','#FFD180','#A1887F','#90A4AE','#FF6652'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4CAF50','#FF8A80','#FFD180','#A1887F','#90A4AE','#FF6652']
              }
            ]
          };
          this.tabs[index].data = data;
        }
      });
    });

    // const roleId1 = 1;
    // const roleId2 = 2;
    // const roleId3 = 3;

    // this.PieChartSVC.getMarks(this.candidateId, this.jobId, roleId1).subscribe((res) => {
    //   //console.log(res);
    // });

    // this.PieChartSVC.getMarks(this.candidateId, this.jobId, roleId2).subscribe((res) => {
    //   console.log(res);
    // });

    // this.PieChartSVC.getMarks(this.candidateId, this.jobId, roleId3).subscribe((res) => {
    //   //console.log(res);
    // });
  }

  

}

// export class PieChartComponent implements OnInit, AfterViewInit {
//   @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
//   data: any;
//   options: any;
//   value: number = 0;
//   chart: any;
//   CurrentSection:any;


//   // latestValues: { [key: string]: number } = {};

//   constructor(private slidersService: SlidersService) { }

//   ngOnInit(): void {
//     const documentStyle = getComputedStyle(document.documentElement);
//     const textColor = documentStyle.getPropertyValue('--text-color');

//     this.data = {
//       labels: [],
//       datasets: [
//         {
//           data: [],
//           backgroundColor: [],
//           hoverBackgroundColor: []
//         }
//       ]
//     };

//     this.options = {
//       plugins: {
//         legend: {
//           display: false
//         }
//       }
//     };
//   }

//     ngAfterViewInit(): void {
//       if (!this.chart) {
//       const canvas = this.canvasRef.nativeElement;
//       this.chart = new Chart(canvas, {
//         type: 'pie',
//         data: this.data,
//         options: this.options
//       });

//     this.slidersService.sliderValue$.subscribe(values => {
//       console.log('Received values from sliderValue$', values);
//       this.updateChartData(values);
//     });
//   }
// }

//   updateChartData(values: { [name: string]: number }): void {
//     console.log('Updating chart data with values', values);
//     this.data.labels = Object.keys(values);
//     this.data.datasets[0].data = Object.values(values);
    
//     const colorPalette = ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4CAF50','#FF8A80','#FFD180','#A1887F','#90A4AE','#FF6652'];
//     this.data.datasets[0].backgroundColor = colorPalette.slice(0, this.data.labels.length);
//     this.data.datasets[0].hoverBackgroundColor = colorPalette.slice(0, this.data.labels.length);

//     this.chart.update();
//   }

//   navigateToSection(name: string): void {
    

//   }
// }




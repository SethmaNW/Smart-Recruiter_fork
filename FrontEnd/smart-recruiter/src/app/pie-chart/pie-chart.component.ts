import { Component, OnInit } from '@angular/core';
import { PieChartService } from './pie-chart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit {
  // for tab view
  public tabs: { title: string, isDisabled : boolean, data : any, options : any, finalScore : number | undefined }[] = [];
  public options: any;
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
      { title: '1st', isDisabled : false, data : {}, options : {}, finalScore : undefined },
      { title: '2nd', isDisabled : false, data : {}, options : {}, finalScore : undefined },
      { title: '3rd', isDisabled : false, data : {}, options : {}, finalScore : undefined },
    ];

    // fetch the marks of the candidate for all roles (1st interview, 2nd interview, etc)

    this.tabs.forEach((tab, index) => {
      this.PieChartSVC.getMarks(this.candidateId, this.jobId, index+1).subscribe((res) => {
        if (res.finalScore === 0){
          this.tabs[index].isDisabled = true;
        }
        else{
          //create the data for pie chart
          const labels = ['Attitude and Discipline', 'Technical Knowledge', 'Education Background', 'Professional Qualification', 'Career Background', 'Communication Skills', 'Cultural Fit', 'Family Background', 'IQ/Creativity/Problem Solving Skills', 'Management Skills'];
          //const dataPoints = [res.attitudeAndDisciplineParticipation, res.technicalKnowledgeParticipation, res.educationBackgroundParticipation, res.professionalQualificationParticipation, res.careerBackgroundParticipation, res.communicationSkillsParticipation, res.culturalFitParticipation, res.familyBackgroundParticipation, res.iqCreativityProblemSolvingSkillsParticipation, res.managementSkillsParticipation];
          const dataPoints = [
            res.attitudeAndDisciplineParticipation, 
            res.technicalKnowledgeParticipation, 
            res.educationBackgroundParticipation, 
            res.professionalQualificationParticipation, 
            res.careerBackgroundParticipation, 
            res.communicationSkillsParticipation, 
            res.culturalFitParticipation, 
            res.familyBackgroundParticipation, 
            res.iqCreativityProblemSolvingSkillsParticipation, 
            res.managementSkillsParticipation
          ].map((point: number | undefined) => point ? point * 100 : 0); // Multiply each data point by 100 if it is not undefined
          const backgroundColors = ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4CAF50','#FF8A80','#FFD180','#A1887F','#90A4AE','#FF6652'];
          const hoverBackgroundColors = ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4CAF50','#FF8A80','#FFD180','#A1887F','#90A4AE','#FF6652'];

          const filteredLabels = [];
          const filteredData = [];
          const filteredBackgroundColors = [];
          const filteredHoverBackgroundColors = [];

          for (let i = 0; i < dataPoints.length; i++) {
            if (dataPoints[i] !== 0) {
              filteredLabels.push(labels[i]);
              filteredData.push(dataPoints[i]);
              filteredBackgroundColors.push(backgroundColors[i]);
              filteredHoverBackgroundColors.push(hoverBackgroundColors[i]);
            }
          }

          const data = {
            labels: filteredLabels,
            datasets: [
              {
                data: filteredData,
                backgroundColor: filteredBackgroundColors,
                hoverBackgroundColor: filteredHoverBackgroundColors
              }
            ]
          };

          this.options = {
            //display labels on data elements in graph
            plugins: {
              datalabels: {
                align: 'end',
                anchor: 'end',
                borderRadius: 4,
                backgroundColor: 'teal',
                color: 'white',
                font: {
                  weight: 'bold',
                },
              },
              
              legend: {
                display: true,
                position: 'bottom',
                align : 'start',
              },
            },
          };
          this.tabs[index].finalScore = Math.round((res.finalScore? res.finalScore : 0) * 10) / 10;
          this.tabs[index].options = this.options;
          this.tabs[index].data = data;
        }
      });
    });

    
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




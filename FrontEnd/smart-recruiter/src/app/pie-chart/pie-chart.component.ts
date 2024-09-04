import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { PieChartService } from './pie-chart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit, AfterViewInit {
  // for tab view
  public tabs: { title: string, isDisabled : boolean, data : any, options : any, finalScore : number | undefined }[] = [];
  public options: any;
  //For query parameters
  public jobId : number | undefined;
  public candidateId : number | undefined;

  public pieChartDataLoaded : boolean = false;

  constructor(private PieChartSVC : PieChartService, private route : ActivatedRoute, private ngZone: NgZone, private cdr : ChangeDetectorRef){}

  ngOnInit(): void {
    this.initializer(); 
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  public changeDetection() : void {
    this.cdr.detectChanges();
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
        //console.log('Marks:', res);
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
          ].map((point: number | undefined) => point ? (point * 100).toFixed(3) : 0); // Multiply each data point by 100 if it is not undefined
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

          // Run change detection outside Angular's default change detection cycle
          this.ngZone.run(() => {
            this.tabs = [...this.tabs]; // Trigger change detection by creating a new array reference
          });
          //console.log('Tabs:', this.tabs[index].data);
        }
      });
    });

    this.pieChartDataLoaded = true;
    //this.cdr.detectChanges();
    console.log('Tabs:', this.tabs);
  }
}
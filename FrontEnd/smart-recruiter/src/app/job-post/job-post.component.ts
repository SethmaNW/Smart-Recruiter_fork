import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { JobPostService } from '../services/job-post.service';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss'],
  standalone : true,
  imports: [CommonModule, CardModule]
})
export class JobPostComponent {
  p_cardStyleOBJ = {'background-color':'var(--surface-200)', 'margin-top': '2rem'}

  @Input() job! : Job;
  constructor() { }

}

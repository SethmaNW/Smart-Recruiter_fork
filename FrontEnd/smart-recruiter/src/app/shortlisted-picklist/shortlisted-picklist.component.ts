import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ShortlistedListService } from '../services/shortlisted-list.service';

@Component({
  selector: 'app-shortlisted-picklist',
  templateUrl: './shortlisted-picklist.component.html',
  styleUrls: ['./shortlisted-picklist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShortlistedPicklistComponent implements OnInit {
  @Input() status: string = '';
  sourcecandidates: any[] = [];
  targetcandidates: any[] = [];
  // loading: boolean = true;

  constructor(private shortlistedListService: ShortlistedListService) { }

  ngOnInit(){
    this.sourcecandidates = this.shortlistedListService.getShortlistedCandidates().filter(candidate => candidate.status === this.status);
    // this.loading = this.shortlistedListService.isLoading();
  }
}


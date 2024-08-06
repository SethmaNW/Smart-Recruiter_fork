import { Component, OnInit } from '@angular/core';
import { ShortlistedListService } from '../services/shortlisted-list.service';

@Component({
  selector: 'app-shortlisted-card',
  templateUrl: './shortlisted-card.component.html',
  styleUrls: ['./shortlisted-card.component.scss']
})
export class ShortlistedCardComponent implements OnInit {
  shortlisted: any[] = [];
  loading: boolean = true;

  constructor(private shortlistedListService: ShortlistedListService) { }

  ngOnInit(){
    this.shortlisted = this.shortlistedListService.getShortlistedCandidates();
    this.loading = this.shortlistedListService.isLoading();
  }
}

import { Component, OnInit } from '@angular/core';
import { ShortlistedListService } from '../services/shortlisted-list.service';

@Component({
  selector: 'app-shortlisted-candidate-account',
  templateUrl: './shortlisted-candidate-account.component.html',
  styleUrls: ['./shortlisted-candidate-account.component.scss']
})
export class ShortlistedCandidateAccountComponent implements OnInit {
  shortlisted: any[] = [];
  loading: boolean = true;

  constructor(private shortlistedListService: ShortlistedListService) { }

  ngOnInit(){
    this.shortlisted = this.shortlistedListService.getShortlistedCandidates();
    this.loading = this.shortlistedListService.isLoading();
  }
}

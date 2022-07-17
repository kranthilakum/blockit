import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Listing } from '../../types';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css'],
})
export class ListingDetailsComponent implements OnInit {
  url: string = '';
  listing: Listing | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const urlParamId = this.activatedRoute.snapshot.paramMap.get('id') || '0';
    this.dataService
      .getMyListing(urlParamId)
      .subscribe((listing: Listing | null | undefined) => {
        this.listing = listing!;
        console.log(this.listing);
      });
  }
}

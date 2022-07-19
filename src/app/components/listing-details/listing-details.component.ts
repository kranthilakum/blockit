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
  urlSubscription: Subscription = new Subscription();
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const urlParamId = this.activatedRoute.snapshot.paramMap.get('id') || '0';
    this.urlSubscription = this.activatedRoute.url.subscribe((url) => {
      this.url = url[0].path;
      if (this.url.includes('listings')) {
        this.dataService
          .getListing(urlParamId)
          .subscribe((listing: Listing | null | undefined) => {
            this.listing = listing!;
            console.log(this.listing);
          });
      } else if (this.url.includes('my-listings')) {
        this.dataService
          .getMyListing(urlParamId)
          .subscribe((listing: Listing | null | undefined) => {
            this.listing = listing!;
            console.log(this.listing);
          });
      }
    });
  }

  ngdOnDestroy(): void {
    this.urlSubscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-my-listing',
  templateUrl: './my-listing.component.html',
  styleUrls: ['./my-listing.component.css'],
})
export class MyListingComponent implements OnInit {
  listings: Listing[] = [];
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMylistings().subscribe((listings: Listing[]) => {
      this.listings = listings;
    });
  }

  gotoContactForm(listing: Listing) {
    this.router.navigateByUrl(`contact/${listing.id}`);
  }

  deleteListing(id: string) {
    // TODO: delete listing
  }
}

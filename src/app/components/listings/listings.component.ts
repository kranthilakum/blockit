import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../../types';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
})
export class ListingsComponent implements OnInit {
  listings: Listing[] = [];
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getListings().subscribe((listings: Listing[]) => {
      this.listings = listings;
    });
  }

  gotoContactForm(listing: Listing) {
    this.router.navigateByUrl(`contact/${listing.id}`);
  }
}

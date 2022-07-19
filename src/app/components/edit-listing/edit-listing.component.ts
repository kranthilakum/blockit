import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Listing } from '../../types';
@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css'],
})
export class EditListingComponent implements OnInit {
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

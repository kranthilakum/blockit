import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onListingSubmit(listing: Listing): void {
    this.dataService.createListing(listing).subscribe(() => {
      console.log('Listing updated');
    });
    console.log(listing);
  }

}

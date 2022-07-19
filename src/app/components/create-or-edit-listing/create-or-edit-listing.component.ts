import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { nanoid } from 'nanoid'
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-create-or-edit-listing',
  templateUrl: './create-or-edit-listing.component.html',
  styleUrls: ['./create-or-edit-listing.component.css'],
})
export class CreateOrEditListingComponent implements OnInit {
  @Input() listing: Listing | undefined;
  @Input() submitButton: string = '';
  @Output() onListingSubmit: EventEmitter<Listing> = new EventEmitter<Listing>();
  createOrEditListingForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    zip: new FormControl(''),
    publishNow: new FormControl(false),
  });
  constructor() { }

  ngOnInit(): void {
    if (this.listing) {
      this.createOrEditListingForm.patchValue({
        name: this.listing.name,
        price: this.listing.price,
        description: this.listing.description,
        street: this.listing.location?.address?.street,
        city: this.listing.location?.address?.city,
        state: this.listing.location?.address?.state,
        country: this.listing.location?.address?.country,
        zip: this.listing.location?.address?.zip,
        publishNow: this.listing.isPosted,
      });
    }
  }

  onSubmit(): void {
    this.onListingSubmit.emit({
      id: nanoid(),
      name: this.createOrEditListingForm.value.name!,
      price: this.createOrEditListingForm.value.price!,
      description: this.createOrEditListingForm.value.description!,
      location: {
        id: nanoid(),
        address: {
          street: this.createOrEditListingForm?.value?.street!,
          city: this.createOrEditListingForm.value.city!,
          state: this.createOrEditListingForm.value.state!,
          country: this.createOrEditListingForm.value.country!,
          zip: this.createOrEditListingForm.value.zip!
        }
      },
      isPosted: Boolean(this.createOrEditListingForm.value.publishNow),
      lastUpdated: new Date().toISOString(),
    });
  }
}

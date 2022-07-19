import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { uuid } from 'uuidv4';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-create-or-edit-listing',
  templateUrl: './create-or-edit-listing.component.html',
  styleUrls: ['./create-or-edit-listing.component.css'],
})
export class CreateOrEditListingComponent implements OnInit {
  @Input() listing: Listing | undefined;
  @Input() submitButton: string = '';
  @Output() submitListing: EventEmitter<Listing> = new EventEmitter<Listing>();
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

  ngOnInit(): void { }

  onSubmit(): void {
    this.submitListing.emit({
      id: uuid(),
      name: this.createOrEditListingForm.value.name!,
      price: this.createOrEditListingForm.value.price!,
      description: this.createOrEditListingForm.value.description!,
      location: {
        id: uuid(),
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

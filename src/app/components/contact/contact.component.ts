import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Listing } from '../../types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  listing: Listing | undefined;
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.getListings().subscribe((listings: Listing[]) => {
      this.listing = listings.find(
        (listing) =>
          listing.id == this.activatedRoute.snapshot.paramMap.get('id')
      );
      this.contactForm.patchValue({
        message: "Hi, I'm interested in your " + this.listing?.name + '!',
      });
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}

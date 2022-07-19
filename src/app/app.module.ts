import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewListingComponent } from './components/new-listing/new-listing.component';
import { MyListingComponent } from './components/my-listing/my-listing.component';
import { CreateOrEditListingComponent } from './components/create-or-edit-listing/create-or-edit-listing.component';
import { HeaderComponent } from './components/header/header.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    ListingDetailsComponent,
    ContactComponent,
    NewListingComponent,
    MyListingComponent,
    CreateOrEditListingComponent,
    HeaderComponent,
    EditListingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

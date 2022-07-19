import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { ListingsComponent } from './components/listings/listings.component';
import { MyListingComponent } from './components/my-listing/my-listing.component';
import { NewListingComponent } from './components/new-listing/new-listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsComponent, pathMatch: 'full' },
  { path: 'listings/:id', component: ListingDetailsComponent },
  { path: 'my-listings', component: MyListingComponent },
  { path: 'edit-listing/:id', component: EditListingComponent },
  { path: 'new-listing', component: NewListingComponent },
  { path: 'contact/:id', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

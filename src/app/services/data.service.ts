import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { fakeList, fakeMyList } from '../../assets/data';
import { Listing } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() { }

  getListings(): Observable<Listing[]> {
    return of(fakeList);
  }

  getMylistings(): Observable<Listing[]> {
    return of(fakeMyList);
  }

  getMyListing(id: string): Observable<Listing | null | undefined> {
    return this.getMylistings().pipe(
      map((listings: Listing[]) =>
        listings.find((listing) => listing.id === id)
      ),
      catchError((err) => {
        console.error(err);
        return of(null);
      })
    );
  }

  getListing(id: string): Observable<Listing | null | undefined> {
    return this.getListings().pipe(
      map((listings: Listing[]) =>
        listings.find((listing) => listing.id === id)
      ),
      catchError((err) => {
        console.error(err);
        return of(null);
      })
    );
  }

  updateListing(listing: Listing): Observable<Listing> {
    return of(listing);
  }

  createListing(listing: Listing): Observable<Listing> {
    return of(listing);
  }

  throwError(error: any) {
    console.log(error);
    throw new Error('This is an error');
  }
}

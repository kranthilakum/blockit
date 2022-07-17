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
  constructor() {}

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

  throwError(error: any) {
    console.log(error);
    throw new Error('This is an error');
  }
}

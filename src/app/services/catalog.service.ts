import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Collection, Look, Store, Review, InstagramPost, WhyPehnavaItem } from '../models/catalog.models';
import { COLLECTIONS_DATA, FEATURED_LOOKS_DATA, INSTAGRAM_GRID_DATA, WHY_PEHNAVA_DATA } from '../data/fashionData';
import { REVIEWS_DATA } from '../data/reviews';
import { BUSINESS_CONFIG } from '../config/business';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  private readonly http = inject(HttpClient);

  collections(): Observable<Collection[]> {
    return this.http.get<Collection[]>('/api/collections').pipe(
      map((res) => (res && res.length > 0 ? res : COLLECTIONS_DATA)),
      catchError(() => of(COLLECTIONS_DATA))
    );
  }

  looks(): Observable<Look[]> {
    return this.http.get<Look[]>('/api/products').pipe(
      map((res) => (res && res.length > 0 ? res : FEATURED_LOOKS_DATA)),
      catchError(() => of(FEATURED_LOOKS_DATA))
    );
  }

  store(): Observable<Store> {
    return this.http.get<Store>('/api/store').pipe(
      map((res) => res || BUSINESS_CONFIG),
      catchError(() => of(BUSINESS_CONFIG))
    );
  }

  reviews(): Observable<Review[]> {
    return of(REVIEWS_DATA);
  }

  instagram(): Observable<InstagramPost[]> {
    return of(INSTAGRAM_GRID_DATA);
  }

  whyPehnava(): Observable<WhyPehnavaItem[]> {
    return of(WHY_PEHNAVA_DATA);
  }
}

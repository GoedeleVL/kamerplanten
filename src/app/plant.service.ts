import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private plantenUrl = 'http://localhost:8080/planten';
  private dorstigePlantenUrl = 'http://localhost:8080/planten/dorstig';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  /** GET planten from the server */
  getPlanten(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.plantenUrl)
      .pipe(
        catchError(this.handleError<Plant[]>('getPlanten', []))
      );
  }

  /** GET plant by id. Will 404 if id not found */
  getPlant(id: number): Observable<Plant> {
    const url = `${this.plantenUrl}/${id}`;
    return this.http.get<Plant>(url)
      .pipe(
        catchError(this.handleError<Plant>(`getPlant id=${id}`))
    );
  }

  /** PUT: update the plant on the server */
  updatePlant(plant: Plant): Observable<any> {
    const id = plant.id;
    const url = `${this.plantenUrl}/${id}`;
    return this.http.put(url, plant, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updatePlant'))
  );
}

  /** POST: add a new plant to the server */
  addPlant(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(this.plantenUrl, plant, this.httpOptions)
      .pipe(
        catchError(this.handleError<Plant>('addPlant'))
    );
  }

  /** DELETE: delete the plant from the server */
  deletePlant(plant: Plant | number): Observable<Plant> {
  const id = typeof plant === 'number' ? plant : plant.id;
  const url = `${this.plantenUrl}/${id}`;

  return this.http.delete<Plant>(url, this.httpOptions)
  .pipe(
    catchError(this.handleError<Plant>('deletePlant'))
  );
}

  getDorstigePlanten(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.dorstigePlantenUrl)
      .pipe(
        catchError(this.handleError<Plant[]>('getPlanten', []))
      );

  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

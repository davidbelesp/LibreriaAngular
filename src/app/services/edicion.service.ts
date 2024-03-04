import { Injectable } from '@angular/core';
import { Edicion } from '../interfaces/libreria.interface';
import { Observable, catchError, of } from 'rxjs';
import { environmets } from '../environments/environments.dev';
import { HttpClient } from '@angular/common/http';
import { IService } from '../interfaces/IService';

@Injectable({
  providedIn: 'root'
})
export class EdicionService implements IService<Edicion, string> {

  private baseURL  : string = environmets.baseUrl;
  private endPoint : string = environmets.endPoint.edicion;
  list?: Edicion[] | undefined;

  constructor( private http : HttpClient) { }


  getAll(): Observable<Edicion[]> {
    return this.http.get<Array<Edicion>>(`${this.baseURL}/${this.endPoint}`)
                    .pipe(
                      catchError( () => of([]))
                    );
  }

  getByID(k: string): Observable<Edicion[]> {
    throw new Error('Method not implemented.');
  }
  delete(k: string): Observable<Boolean> {
    throw new Error('Method not implemented.');
  }
  update(t: Edicion): Observable<Edicion | null> {
    throw new Error('Method not implemented.');
  }
  create(t: Edicion): Observable<Edicion | null> {
    throw new Error('Method not implemented.');
  }
}

import { Injectable } from '@angular/core';
import { Autor } from '../interfaces/libreria.interface';
import { IService } from '../interfaces/IService';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environmets } from '../environments/environments.dev';

@Injectable({
  providedIn: 'root'
})
export class AutorService implements IService<Autor, string>{

  private baseURL: string = environmets.baseUrl;
  private endPoint: string = environmets.endPoint.autor;
  list?: Autor[] | undefined;

  constructor( private http : HttpClient ) { }


  getAll(): Observable<Autor[]> {

    return this.http.get<Array<Autor>>(`${this.baseURL}/${this.endPoint}`)
                    .pipe(
                      catchError( ()=> of([]))
                    );
  }
  getByID(k: string): Observable<Autor[]> {
    throw new Error('Method not implemented.');
  }
  delete(k: string): Observable<Boolean> {
    throw new Error('Method not implemented.');
  }
  update(t: Autor): Observable<Autor | null> {
    throw new Error('Method not implemented.');
  }
  create(t: Autor): Observable<Autor | null> {
    throw new Error('Method not implemented.');
  }

}

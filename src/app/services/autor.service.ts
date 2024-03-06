import { Injectable } from '@angular/core';
import { Autor } from '../interfaces/libreria.interface';
import { IService } from '../interfaces/IService';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environmets } from '../environments/environments.dev';

@Injectable({
  providedIn: 'root'
})
export class AutorService implements IService<Autor, string>{

  private baseURL: string = environmets.baseUrl;
  private endPoint: string = environmets.endPoint.autor;
  list?: Autor[] | undefined;

  constructor( private http : HttpClient ) { }
  delete(k: string): Observable<Boolean> {
    throw new Error('Method not implemented.');
  }


  getAll(): Observable<Autor[]> {

    return this.http.get<Array<Autor>>(`${this.baseURL}/${this.endPoint}`)
                    .pipe(
                      catchError( ()=> of([]))
                    );
  }
  getByID(k: string): Observable<Autor[]> {
    throw new Error('Method not implemented.');
  }
  deleteById(k: number): Observable<Boolean> {
    // console.log(t)
    let options = {
      header : new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}),
      body : {
              id:k
              }
    };
    this.http.delete<Autor>(`${this.baseURL}/${this.endPoint}`, options).subscribe(resp => {console.log(resp)})
    // return of(null)
    return of(false)
  }
  update(t: Autor): Observable<Autor | null> {
    throw new Error('Method not implemented.');
  }
  create(t: Autor): Observable<Autor | null> {
    console.log(t)
    this.http.post<Autor>(`${this.baseURL}/${this.endPoint}`, {name:t.Nombre}).subscribe(resp => {console.log(resp)})
    return of(null)
  }

}

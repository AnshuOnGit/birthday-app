import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import {from, Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Wish} from './wish'

@Injectable({
  providedIn: 'root'
})

export class WishService{
    constructor(private httpClient: HttpClient){}

    private readonly GET_URL: string = 'http://ec2-13-232-249-60.ap-south-1.compute.amazonaws.com/wishes';

    private readonly POST_URL: string = 'http://ec2-13-232-249-60.ap-south-1.compute.amazonaws.com/wish';

    getWishes(): Observable<Wish[]>{
        return this.httpClient.get(this.GET_URL).pipe(
          map((wishes: Wish[]) => {
            return wishes;
          }), 
          catchError(error => {return throwError("No wish found");})
        );
    }

    postWish(wish: Wish):  Observable<Wish[]>{
      return this.httpClient.post(this.POST_URL, wish).pipe(
        map((wishes: Wish[]) => {
          return wishes;
        }), 
        catchError(error => {return throwError("Wish could not be created successfully");})
      );
  }
}
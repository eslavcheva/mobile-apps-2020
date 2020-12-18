import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

/*
  Generated class for the EliteApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EliteApiProvider {
  private baseUrl = 'https://elite-schedule-app-ff69c.firebaseio.com';
  currentTourney: any = {};

  constructor(public http: HttpClient) {
    console.log('Hello EliteApiProvider Provider');
  }

  getTournaments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tournaments.json`)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getTournamentData(tourneyId) : Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
        .map(response => {
            this.currentTourney = response;
            return this.currentTourney;
    });
  }

  getCurrentTourney(){
    return this.currentTourney;
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return Observable.throw(err);
  }

}

import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../model/board.model';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json' 
  })
};

@Injectable({
  providedIn: 'root'
})
export class MainService {
url: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }


  addPlayers(names): Observable <any>
  {
    debugger;
    return this.http.post(this.url + 'addplayers',names,httpOptions);
  }

  sendPlayerMove(playerObj): Observable <any>
  {
    return this.http.post(this.url + 'playermove', playerObj, httpOptions)
  }

  resetBoard(): Observable <any>
  {
   return this.http.get(this.url + 'reset')
  }

  allMoves(): Observable <any>
  {
    return this.http.get(this.url + 'getplayersandmoves');
  }
}

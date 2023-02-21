import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postPlayer(data: any) {
    return this.http.post<any>('http://localhost:3000/playerList', data);
  }
  getPlayer() {
    return this.http.get<any>('http://localhost:3000/playerList');
  }
  putPlayer(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/playerList/' + id, data);
  }
  deletePlayer(id: number) {
    return this.http.delete<any>('http://localhost:3000/playerList' + id);
  }
}

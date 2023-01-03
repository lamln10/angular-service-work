import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(
    private httpClient: HttpClient
  ) { }

  verifySignature(body: any): Observable<any> {
    return this.httpClient.post('http://10.1.22.236:3000/api/verify-signature', body);
  }
}

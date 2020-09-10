import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { SelectItem } from 'primeng/api';

const testData: SelectItem[] =  [{label: 'Tanger', value: 'idT'}, {label: 'Marrakesh', value: 'idM'}];

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }

  async getResults(): Promise<SelectItem[]> {
    return of(testData).toPromise()
    .then((data: SelectItem[]) => data);
  }

}

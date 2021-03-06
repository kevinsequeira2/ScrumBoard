import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Icompany } from '../models/icompany';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  postCompany(formData) {
    return this.http.post(environment.apiBaseURI + '/companies', formData);
  }

  putCompany(formData) {
    return this.http.put(environment.apiBaseURI + '/companies/' + formData.id, formData);
  }

  deleteCompany(id) {
    return this.http.delete(environment.apiBaseURI + '/companies/' + id);
  }

  getCompanyList() {
    return this.http.get(environment.apiBaseURI + '/companies');
  }

  getCompanyArray(): Observable<Icompany[]>{
    return this.http.get<Icompany[]>('https://localhost:5001/api/companies');
  }


}


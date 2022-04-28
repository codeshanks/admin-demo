import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

constructor() { }


getCompanies():Observable<any[]> {
  return  of([
          {name: "TestCompany", id: 123},
          {name: "Vandelay Industries", id: 234},
          {name: "Bluth Company", id: 456},
          {name: "Dunder Mifflin", id: 789}
         ])
}

getCompanyDetail(id: number){
  return this.companyData.find(x => x.id == id)
}

companyData = [
  {id: 123, CompanyName: "TestCompany", URLSuffix: "test", ReportingName: "TestCompany"},
  {id: 234, CompanyName: "Vandelay Industries", URLSuffix: "Vandelay", ReportingName: "VandelayIndustries"},
  {id: 456, CompanyName: "Bluth Company", URLSuffix: "Bluth", ReportingName: "BluthCompany"},
  {id: 789, CompanyName: "Dunder Mifflin", URLSuffix: "Dunder", ReportingName: "DunderMifflin"}
]

}

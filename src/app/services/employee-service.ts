import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { EmployeeModel, IEmployeeListModel } from "../models/Employee.Model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  apiUrl: string = "http://localhost:5138/api/";
  http = inject(HttpClient);

  saveEmployee(obj: EmployeeModel) {
    return this.http.post(this.apiUrl + "EmployeeMaster", obj);
  }

  getAllEmployee(): Observable<IEmployeeListModel[]> {
    return this.http.get<IEmployeeListModel[]>(this.apiUrl + "EmployeeMaster");
  }

  getEmpById(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(this.apiUrl + "EmployeeMaster/" + id);
  }
}

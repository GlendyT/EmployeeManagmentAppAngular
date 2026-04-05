import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { EmployeeModel } from "../models/Employee.Model";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  apiUrl: string = "http://localhost:5138/api/";
  http = inject(HttpClient);

  saveEmployee(obj: EmployeeModel) {
    return this.http.post(this.apiUrl + "EmployeeMaster", obj);
  }
}

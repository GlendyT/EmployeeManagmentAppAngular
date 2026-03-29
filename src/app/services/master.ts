import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { DepartmentModal } from "../models/Department.models";

@Injectable({
  providedIn: "root",
})
export class Master {
  apiUrl: string = "http://localhost:5138/api/";
  http = inject(HttpClient);

  getAllDept() {
    return this.http.get(this.apiUrl + "DepartmentMaster/GetAllDepartments");
  }

  saveDept(obj: DepartmentModal) {
    return this.http.post(this.apiUrl + "DepartmentMaster/AddDepartment", obj);
  }

  updateDept(obj: DepartmentModal) {
    return this.http.put(this.apiUrl + "DepartmentMaster/UpdateDepartment", obj);
  }
}

import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { DepartmentModal } from "../models/Department.models";
import { DesignationModel } from "../models/Designation.models";

@Injectable({
  providedIn: "root",
})
export class Master {
  apiUrl: string = "http://localhost:5138/api/";
  http = inject(HttpClient);

  // Department methods
  getAllDept() {
    return this.http.get(this.apiUrl + "DepartmentMaster/GetAllDepartments");
  }

  saveDept(obj: DepartmentModal) {
    return this.http.post(this.apiUrl + "DepartmentMaster/AddDepartment", obj);
  }

  updateDept(obj: DepartmentModal) {
    return this.http.put(
      this.apiUrl + "DepartmentMaster/UpdateDepartment",
      obj
    );
  }

  deleteDeptbyId(id: number) {
    return this.http.delete(
      this.apiUrl + "DepartmentMaster/DeleteDepartment/" + id
    );
  }

  // Designation methods
  getAllDesignations() {
    return this.http.get(this.apiUrl + "DesignationMaster");
  }

  saveDesignation(obj: DesignationModel) {
    return this.http.post(
      this.apiUrl + "DesignationMaster",
      obj
    );
  }

  updateDesignation(obj: DesignationModel) {
    return this.http.put(
      this.apiUrl + "DesignationMaster",
      obj
    );
  }

  deleteDesignationById(id: number) {
    return this.http.delete(
      this.apiUrl + "DesignationMaster/" + id
    );
  }
}

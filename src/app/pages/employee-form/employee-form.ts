import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EmployeeModel } from "../../models/Employee.Model";
import { EmployeeService } from "../../services/employee-service";
import { DesignationListModel } from "../../models/Designation.models";
import { Observable } from "rxjs";
import { Master } from "../../services/master";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-employee-form",
  imports: [FormsModule, AsyncPipe],
  templateUrl: "./employee-form.html",
  styleUrl: "./employee-form.css",
})
export class EmployeeForm {
  newEmployeeObj: EmployeeModel = new EmployeeModel();
  emmService = inject(EmployeeService);
  masterSrv = inject(Master)

  $designationList: Observable<DesignationListModel[]> = this.masterSrv.getAllDesignations() as Observable<DesignationListModel[]>;

  constructor() {}

  onSaveEmp() {
    this.emmService.saveEmployee(this.newEmployeeObj).subscribe({
      next: (result) => {
        alert("Employee Created Success")
        this.newEmployeeObj = new EmployeeModel();
      },
      error: (error) => {},
    });
  }
}

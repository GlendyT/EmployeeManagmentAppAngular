import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EmployeeModel } from "../../models/Employee.Model";
import { EmployeeService } from "../../services/employee-service";
import { DesignationListModel } from "../../models/Designation.models";
import { Observable } from "rxjs";
import { Master } from "../../services/master";
import { AsyncPipe } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-employee-form",
  imports: [FormsModule, AsyncPipe],
  templateUrl: "./employee-form.html",
  styleUrl: "./employee-form.css",
})
export class EmployeeForm {
  newEmployeeObj: EmployeeModel = new EmployeeModel();
  emmService = inject(EmployeeService);
  masterSrv = inject(Master);
  activeRoute = inject(ActivatedRoute);

  $designationList: Observable<DesignationListModel[]> = new Observable<
    DesignationListModel[]
  >();

  loggedEmpData: EmployeeModel = new EmployeeModel()

  constructor() {
    this.activeRoute.params.subscribe((res: any) => {
      debugger;
      if (res.id != 0) {
        this.newEmployeeObj.employeeId = res.id;
        this.getEmpById()
      }
    });
    this.$designationList = this.masterSrv.getAllDesignations();
  }

  getEmpById() {
    this.emmService.getEmpById(this.newEmployeeObj.employeeId).subscribe({
      next: (result) => {
        this.newEmployeeObj = result;
      },
    });
  }

  onSaveEmp() {
    this.emmService.saveEmployee(this.newEmployeeObj).subscribe({
      next: (result) => {
        alert("Employee Created Success");
        this.newEmployeeObj = new EmployeeModel();
      },
      error: (error) => {},
    });
  }
}

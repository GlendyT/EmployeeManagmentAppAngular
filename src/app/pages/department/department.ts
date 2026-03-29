import { Component, inject, OnInit } from "@angular/core";
import { DepartmentModal } from "../../models/Department.models";
import { FormsModule } from "@angular/forms";
import { Master } from "../../services/master";

@Component({
  selector: "app-department",
  imports: [FormsModule],
  templateUrl: "./department.html",
  styleUrl: "./department.css",
})
export class Department implements OnInit {
  newDeptObj: DepartmentModal = new DepartmentModal();
  masterService = inject(Master);
  deptList: DepartmentModal[] = [];

  ngOnInit(): void {
    this.getAllDepartments();
  }

  onSaveDept() {
    debugger;
    this.masterService.saveDept(this.newDeptObj).subscribe({
      next: (result: any) => {
        debugger;
        alert("Department Created Successfully");
        this.getAllDepartments();
      },
      error: (error) => {
        alert(error.error);
      },
    });
  }

  onUpdateDept() {
    debugger;
    this.masterService.updateDept(this.newDeptObj).subscribe({
      next: (result: any) => {
        debugger;
        alert("Department Updated Successfully");
        this.getAllDepartments();
      },
      error: (error) => {
        alert(error.error);
      },
    });
  }

  onEdit(data: DepartmentModal) {
    const strData = JSON.stringify(data);
    const parseData = JSON.parse(strData);
    this.newDeptObj = parseData;
  }

  onReset() {
    this.newDeptObj = new DepartmentModal();
  }

  getAllDepartments() {
    this.masterService.getAllDept().subscribe({
      next: (result: any) => {
        this.deptList = result;
      },
    });
  }
}

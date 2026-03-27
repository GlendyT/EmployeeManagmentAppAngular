import { Component } from "@angular/core";
import { DepartmentModal } from "../../models/Department.models";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-department",
  imports: [FormsModule],
  templateUrl: "./department.html",
  styleUrl: "./department.css",
})
export class Department {
  newDeptObj: DepartmentModal = new DepartmentModal();
}

import { Component, inject, OnInit, signal } from "@angular/core";
import { IEmployeeListModel } from "../../models/Employee.Model";
import { EmployeeService } from "../../services/employee-service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-employee-list",
  imports: [RouterLink],
  templateUrl: "./employee-list.html",
  styleUrl: "./employee-list.css",
})
export class EmployeeList implements OnInit{
  employeeList = signal<IEmployeeListModel[]>([]);
  empSr = inject(EmployeeService);

  ngOnInit(): void {
    this.getAllEmp()
  }

  getAllEmp() {
    this.empSr.getAllEmployee().subscribe({
      next: (res: IEmployeeListModel[]) => {
        this.employeeList.set(res);
      },
    });
  }
}

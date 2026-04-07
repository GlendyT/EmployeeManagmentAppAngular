import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { EmployeeModel } from "../../models/Employee.Model";

@Component({
  selector: "app-header",
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: "./header.html",
  styleUrl: "./header.css",
})
export class Header {
  isCollapsed = false;
  router = inject(Router);
  loggedEmpData: EmployeeModel = new EmployeeModel();

  constructor() {
    const localData = localStorage.getItem("empLoginUser");
    if (localData != null) {
      this.loggedEmpData = JSON.parse(localData);
    }
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  onLogOff() {
    localStorage.removeItem("empLoginUser");
    this.router.navigateByUrl("/login");
  }
}

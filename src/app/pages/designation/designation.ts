import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DesignationListModel, DesignationModel } from "../../models/Designation.models";
import { Master } from "../../services/master";

@Component({
  selector: "app-designation",
  imports: [CommonModule, FormsModule],
  templateUrl: "./designation.html",
  styleUrl: "./designation.css",
})
export class Designation implements OnInit {
  newDesignationObj: DesignationModel;
  designationList: DesignationListModel[] = [];
  departmentList: any[] = [];
  loading: boolean = false;
  isLoading = signal(false)

  constructor(private master: Master) {
    this.newDesignationObj = this.getEmptyDesignation();
  }

  ngOnInit(): void {
    this.loadDesignations();
    this.loadDepartments();
  }

  getEmptyDesignation(): DesignationModel {
    return {
      designationId: 0,
      departmentId: 0,
      designationName: "",
    };
  }

  loadDesignations() {
    this.loading = true;
    this.master.getAllDesignations().subscribe({
      next: (res: any) => {
        this.designationList = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  loadDepartments() {
    this.master.getAllDept().subscribe({
      next: (res: any) => {
        this.departmentList = res;
      },
      error: () => {
        this.departmentList = [];
      },
    });
  }

  onSaveDesignation() {
    if (!this.newDesignationObj.designationName || !this.newDesignationObj.departmentId) {
      alert("Please fill all required fields");
      return;
    }
    this.isLoading.set(true)
    this.master.saveDesignation(this.newDesignationObj).subscribe({
      next: (res: any) => {
        alert("Designation Created Successfully");
        this.loadDesignations();
        this.onReset();
        this.isLoading.set(false)
      },
      error: (error) => {
        alert(error.error || "An error occurred while creating");
      }
    });
  }

  onUpdateDesignation() {
    if (!this.newDesignationObj.designationId) return;
    this.isLoading.set(true)
    this.master.updateDesignation(this.newDesignationObj).subscribe({
      next: (res: any) => {
        alert("Designation Updated Successfully");
        this.loadDesignations();
        this.onReset();
        this.isLoading.set(false)
      },
      error: (error) => {
        alert(error.error || "An error occurred while updating");
      }
    });
  }

  onEdit(item: DesignationModel) {
    this.newDesignationObj = { ...item };
  }

  onDelete(id: number) {
    if (!confirm("Are you sure you want to delete this designation?")) return;
    this.isLoading.set(true)
    this.master.deleteDesignationById(id).subscribe({
      next: (res: any) => {
        alert("Designation Deleted Successfully");
        this.loadDesignations();
        this.onReset();
        this.isLoading.set(false)
      },
      error: (error) => {
        alert(error.error || "An error occurred while deleting");
      }
    });
  }

  onReset() {
    this.newDesignationObj = this.getEmptyDesignation();
  }
}

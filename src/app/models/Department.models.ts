export class DepartmentModal {
  departmentId: number;
  departmentName: string;
  isActive: boolean;

  constructor() {
    this.departmentId = 0;
    this.departmentName = "";
    this.isActive = false;
  }
}

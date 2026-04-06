export class EmployeeModel {
  employeeId: number;
  name: string;
  contactNo: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  altContactNo: string;
  address: string;
  designationId: number;
  createdDate: Date; // También puedes usar `string` si prefieres mantenerlo como cadena ISO desde la API
  modifiedDate: Date;
  role: string;

  constructor() {
    this.employeeId = 0;
    this.name = "";
    this.contactNo = "";
    this.email = "";
    this.city = "";
    this.state = "";
    this.pincode = "";
    this.altContactNo = "";
    this.address = "";
    this.designationId = 0;
    this.createdDate = new Date();
    this.modifiedDate = new Date();
    this.role = "";
  }
}

export class LoginDto {
  email: string;
  contactNo: string;

  constructor() {
    this.email = "";
    this.contactNo = "";
  }
}

export interface IEmployeeListModel {
  employeeId: number;
  name: string;
  contactNo: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  address: string;
  designationId: number;
  role: string;
  createdDate: string | Date; // Depending on how you parse the JSON response
  modifiedDate: string | Date; // Depending on how you parse the JSON response
  designationName: string;
  departmentId: number;
  departmentName: string;
}

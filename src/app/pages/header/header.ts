import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: "./header.html",
  styleUrl: "./header.css",
})
export class Header {
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HeadingComponent } from "./components/heading/heading.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <app-nav-bar />
    <app-heading />

    <main class="container mx-auto">
      <router-outlet />
    </main>
  `,
  styles: [],
  imports: [CommonModule, RouterOutlet, HeadingComponent, NavBarComponent],
})
export class AppComponent {
  title = "frontend";
}
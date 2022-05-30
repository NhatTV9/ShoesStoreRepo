import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showDropdownPage: boolean = false;
  showDropdownBlog: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.router.events.subscribe((e) => {
    //   if (e instanceof NavigationEnd) {
    //     console.log(e);
    //   }
    // });
  }
}

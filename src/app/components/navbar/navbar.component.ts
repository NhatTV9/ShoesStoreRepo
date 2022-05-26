import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showDropdownPage: boolean = false;
  showDropdownBlog: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onclick() {
    console.log('click');
  }
}

import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
]
})
export class HeaderComponent implements OnInit {

  headerfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if(window.scrollY > 100) {
      this.headerfixed = true;
    } else {
      this.headerfixed = false;
    }
  }


  @Input() inputSideNav!: MatSidenav;

  constructor() { }

  ngOnInit(): void {

    // const currentLocation = location.href;
    // const menuItem = document.querySelectorAll('a');
    // const menuLength = menuItem.length
    //   for (let i = 0; i<menuLength; i++) {
    //     if(menuItem[i].href === currentLocation) {
    //       menuItem[i].className = 'active'
    //     }
    //   }

  }

}

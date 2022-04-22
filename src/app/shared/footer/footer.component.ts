import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }


  direccionarLinkedin() {
    window.open ('https://www.linkedin.com/company/flybondi/', '_blank');
  }
  
  direccionarInstagram() {
    window.open ('https://www.instagram.com/flybondioficial/', '_blank');
  }
  direccionarFacebook() {
    window.open ('https://www.facebook.com/flybondi', '_blank');
  }
  direccionarYoutube() {
    window.open ('https://www.facebook.com/flybondi', '_blank');
  }
  direccionarTwitter() {
    window.open ('https://twitter.com/flybondioficial', '_blank');
  }

  ngOnInit(): void {
  }

}

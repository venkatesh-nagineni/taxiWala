import { Component, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements AfterViewInit {

  showmenu = false;
  screenWidth: any;
  @ViewChild('responsiveMenu') responsive: ElementRef;
  @ViewChild('homeElm') homepage: ElementRef;
  @ViewChild('profileElm') profilepage: ElementRef;
  @ViewChild('serviceElm') servicepage: ElementRef;
  @ViewChild('priceElm') pricepage: ElementRef;
  @ViewChild('kontaktElm') contactpage: ElementRef;


  @HostListener('window:resize', ['$event'])
    onResize(event?) {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth > 100) {
        this.responsive.nativeElement.style.display = 'none';
      }
}

  constructor(private elm: ElementRef, private router: Router) {
    // this.onResize();
  }

  ngAfterViewInit() {
    this.onResize();
  }

  responsiveFun() {
    this.showmenu = !this.showmenu;
    if (this.showmenu) {
      this.responsive.nativeElement.style.display = 'none';
    } else {
      this.responsive.nativeElement.style.display = 'block';
    }
  }

  navSection(navLink) {
    this.responsive.nativeElement.style.display = 'none';
    if (navLink === 'home') {
      this.homepage.nativeElement.scrollIntoView({ behavior: 'instant', block: 'start' });
    } else if (navLink === 'profile') {
      this.profilepage.nativeElement.scrollIntoView({ behavior: 'instant', block: 'start' });
    } else if (navLink === 'taxiservice') {
      this.servicepage.nativeElement.scrollIntoView({ behavior: 'instant', block: 'start' });
    } else if (navLink === 'preise') {
      this.pricepage.nativeElement.scrollIntoView({ behavior: 'instant', block: 'start' });
    } else if (navLink === 'contact') {
      this.contactpage.nativeElement.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }

}

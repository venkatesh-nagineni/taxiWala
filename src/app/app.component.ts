import { Component, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {

  showmenu = false;
  screenWidth: any;
  @ViewChild('responsiveMenu') responsive: ElementRef;

  @HostListener('window:resize', ['$event'])
    onResize(event?) {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth > 100) {
        this.responsive.nativeElement.style.display = 'none';
      }
}

  constructor(private elm: ElementRef) {
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

  navFunction() {
    this.responsive.nativeElement.style.display = 'none';
  }

}

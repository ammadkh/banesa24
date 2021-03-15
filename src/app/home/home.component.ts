import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  isMenuOpen = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isMenuOpen = false;
    this.authService.currentUser.subscribe(x => this.user = x)
    // this.user = this.authService.currentUserValue;
    console.log(this.user, 'user')
    console.log('home')
  }

  loginMenuOpen() {
    console.log('menu open');
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.user) {
      this.isMenuOpen = false;
      this.router.navigate(['authentication']);
    }
  }

  onLogout() {
    this.authService.logout();
  }

}

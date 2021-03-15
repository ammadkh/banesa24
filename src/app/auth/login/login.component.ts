import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: any;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  ngOnInit(): void {
  }

  login(event) {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(res => {
      if (res) {
        this.router.navigate([this.returnUrl]);
      }
    }, error => {
      console.log(error);
  });
    ;
  }

}

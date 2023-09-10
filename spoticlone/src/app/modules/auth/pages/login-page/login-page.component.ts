import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession: boolean = false
  FormLogin: FormGroup = new FormGroup([])
  
  loading = false;

  load(): void {
    this.loading = true;
  }

  constructor(private authService: AuthService, private cookie: CookieService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.FormLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }
  sendLogin(): void {
    this.load()
    const { email, password } = this.FormLogin.value

    this.authService.sendCredentials(email, password)
      .subscribe(responseok => {
        this.loading = false
        this.router.navigate(['/', 'tracks'])
      },
        err => {
          this.errorSession = true
          console.log('session incorrecta')
        })
    
  }

}

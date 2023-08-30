import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession: boolean = false
  FormLogin: FormGroup = new FormGroup([])

  constructor(private authService: AuthService) {

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
    const { email, password } = this.FormLogin.value

    this.authService.sendCredentials(email, password)
      .subscribe(responseok => {
        console.log('sesion correcta')
      },
        err => {
          this.errorSession = true
          console.log('session incorrecta')
        })
    
  }

}

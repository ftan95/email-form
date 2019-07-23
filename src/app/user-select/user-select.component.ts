import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent implements OnInit {

  constructor(private readonly auth: AuthService) {}

  ngOnInit() {
  }

  logout(): void {
    this.auth.logout();
  }

}

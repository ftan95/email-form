import { Component } from '@angular/core';
import { EmailListItem } from './EmailListItem';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-page',
  templateUrl: './email-page.component.html',
  styleUrls: ['./email-page.component.scss']
})
export class EmailPageComponent {

  constructor(private readonly auth: AuthService,
    private readonly route: Router) {}
  selectedNumber: number = 0;

  // To create each component rather than defining it in the component file - create a class
  components = [
    new EmailListItem("Frederick", "Chains"),
    new EmailListItem("Gabriel", "Gundam"),
    new EmailListItem("John", "Table Tennis")
  ]

  public usertopic = "Magic";

  userRead(index: number) {
    this.components[index].readFlag = true;
  }

  newMessage() {
    this.route.navigate(['/msg']);
  }

  public name: string = "";
  public topic: string = "";

  create() {
    const email = new EmailListItem(this.name, this.topic);
    this.components.push(email);
  }

  logout(): void {
    this.auth.logout();
  }
  
}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { EmailListItem } from './EmailListItem';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-page',
  templateUrl: './email-page.component.html',
  styleUrls: ['./email-page.component.scss']
})
export class EmailPageComponent {
  @ViewChild("test", {static: false})
  test: ElementRef;
  @ViewChild("test2", {static: false})
  test2: ElementRef;
  @ViewChild("spam", {static: false})
  spam: ElementRef;
  @ViewChild("trash", {static: false})
  trash: ElementRef;

  constructor(private readonly auth: AuthService,
    private readonly route: Router) {}
  selectedNumber: number = 0;

  // To create each component rather than defining it in the component file - create a class
  components = [
    new EmailListItem("Frederick", "Chains"),
    new EmailListItem("Gabriel", "Gundam"),
    new EmailListItem("John", "Table Tennis")
  ]

  sent = [
    new EmailListItem("Janice", "Dogs"),
    new EmailListItem("Vivienne", "Exams")
  ]

  spamFolder = [
    new EmailListItem("Joshua", "cars"),
    new EmailListItem("Kieran", "phone")
  ]

  trashFolder = [
    new EmailListItem("Waverly", "slime")
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

  logout(): void {
    this.auth.logout();
  }

  close() {
    this.test.nativeElement.style.display = "inline-block";
    this.test2.nativeElement.style.display = "none";
    this.spam.nativeElement.style.display = "none";
    this.trash.nativeElement.style.display = "none";
  }

  openSent() {
    this.test.nativeElement.style.display = "none";
    this.test2.nativeElement.style.display = "inline-block";
    this.spam.nativeElement.style.display = "none";
    this.trash.nativeElement.style.display = "none";
  }

  openSpam() {
    this.test.nativeElement.style.display = "none";
    this.test2.nativeElement.style.display = "none";
    this.spam.nativeElement.style.display = "inline-block";
    this.trash.nativeElement.style.display = "none";
  }

  openTrash() {
    this.test.nativeElement.style.display = "none";
    this.test2.nativeElement.style.display = "none";
    this.spam.nativeElement.style.display = "none";
    this.trash.nativeElement.style.display = "inline-block";
  }
  
}

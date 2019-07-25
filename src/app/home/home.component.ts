import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly router: Router, 
    private readonly route: ActivatedRoute,
    private emailService: EmailService) 
  {
    const queryParams = this.route.snapshot.queryParams;
    console.log('queryParams', queryParams)
  }
  

  ngOnInit() {
    this.emailService.getEmailsByUserId();
  
  }

}

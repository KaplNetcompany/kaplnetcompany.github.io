import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  goToHomePage(): void {
    this.router.navigate(['/', 'route-handling']);
  }

}

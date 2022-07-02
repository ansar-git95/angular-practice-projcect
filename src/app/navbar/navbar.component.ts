import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  buttonToggle = true;
  dashboardDelay = '0.1s';
  dashboardIconLitransform = 'translateY(0px) scale(0)';
  bussinesDelay = '0.2s';
  bussinesIconLitransform = 'translateY(0px) scale(0)';
  tasksDelay = '0.3s';
  tasksIconLitransform = 'translateY(0px) scale(0)';
  userDelay = '0.4s';
  userIconLitransform = 'translateY(0px) scale(0)';
  constructor() {}
  ngOnInit(): void {}
  menuToggle() {
    if (this.buttonToggle == true) {
      this.dashboardDelay = '0.4s';
      this.bussinesDelay = '0.3s';
      this.tasksDelay = '0.2s';
      this.userDelay = '0.1s';
      this.dashboardIconLitransform = 'translateY(45px) scale(1)';
      this.bussinesIconLitransform = 'translateY(90px) scale(1)';
      this.tasksIconLitransform = 'translateY(135px) scale(1)';
      this.userIconLitransform = 'translateY(180px) scale(1)';

      this.buttonToggle = false;
    } else {
      this.dashboardDelay = '0.1s';
      this.dashboardIconLitransform = 'translateY(0px) scale(0)';
      this.bussinesDelay = '0.2s';
      this.tasksDelay = '0.3s';
      this.userDelay = '0.4s';
      this.bussinesIconLitransform = 'translateY(0px) scale(0)';
      this.tasksIconLitransform = 'translateY(0px) scale(0)';
      this.userIconLitransform = 'translateY(0px) scale(0)';

      this.buttonToggle = true;
    }
  }
}

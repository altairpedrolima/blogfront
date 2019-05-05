import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  public blogLinkVariable = '/blog';
  public blogDetailLinkVariable = '/blog/:id';
  public blogDashboardLinkVariable = '/dashboard';
  public contactLinkVariable = '/contact';
  public aboutLinkVariable = '/about';


  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

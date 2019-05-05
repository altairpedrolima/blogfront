import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public postsLinkVar = '/posts';
  public postDetailLinkVar = '/posts/:id';
  public postNewLinkVar = '/new';
  public contactLinkVar = '/contact';
  public aboutLinkVar = '/about';

  @Output() public sidenavToggle = new EventEmitter();

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}

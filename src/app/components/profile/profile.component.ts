import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Users } from '../../users'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Users = new Users("", "", "", "", 0, 0, 0)
  constructor(private request: ConfigService) {
    this.request.getUser().subscribe(users =>{
      console.log(users.avatar_url)
      this.user = users;
    })
  }
  ngOnInit(): void {
  }

}

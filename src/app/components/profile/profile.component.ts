import { Component, OnInit } from '@angular/core';
import { Repositories } from 'src/app/repositories';
import { ConfigService } from 'src/app/services/config.service';
import { Users } from '../../users'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Users = new Users("", "", "", "", 0, 0, 0)
  repositories: Repositories[] = [];
  username!: string

  constructor(private request: ConfigService) {
    this.request.getUser().subscribe(users => {
      console.log(users);
      this.user = users;
    });

    this.request.getRepos().subscribe(repos => {
      console.log(repos);
      this.repositories = repos;
    });
  }

  search() {
    this.request.profileUpdate(this.username);
    this.request.getUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
    this.request.getRepos().subscribe(data => {
      console.log(data);
      this.repositories = data;
    })
  }
  ngOnInit(): void {
  }

}

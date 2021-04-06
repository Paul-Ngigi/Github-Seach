import { Component, OnInit } from '@angular/core';
import { Repositories } from 'src/app/repositories';
import { ConfigService } from 'src/app/services/config.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user: Users = new Users("", "", "", "", 0, 0, 0);
  repositories: Repositories[] = [];
  name!: string;

  constructor(private request: ConfigService) { }
  
  ngOnInit(): void {
  }
  search() {
    this.request.profileUpdate(this.name);
    this.request.getUser().subscribe(data => {
      console.log(data['data']);
      this.user = data;
    });
    this.request.getRepos().subscribe(data => {
      console.log(data);
      this.repositories = data;
    })
  }

}

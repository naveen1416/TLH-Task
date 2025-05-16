import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileupdateComponent } from '../profileupdate/profileupdate.component';
import { RouterLink } from '@angular/router';
import { SkillsComponent } from '../skills/skills.component';
import { API_BASE_URL } from '../constants';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  profile: any = {};
  skills: any = {};
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${API_BASE_URL}/profile.php`)
      .subscribe((res: any) => {
        this.profile = res;
      }, error => {
        console.error('Error fetching profile:', error);
      });

       this.http.get('http://localhost/projects/Lettinghub/myapi/skills.php')
      .subscribe((res: any) => {
        this.skills = res;
      }, error => {
        console.error('Error fetching profile:', error);
      });
  }
}

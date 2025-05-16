


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router} from '@angular/router';
import { API_BASE_URL } from '../constants';

@Component({
  selector: 'app-skillupdate',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './skillsupdate.component.html'
})
export class SkillUpdateComponent {
  skills = {
    frontend: '',
    backend: '',
    others: ''
  };

  responseMessage = '';
  constructor(private router: Router) {}
  updateSkills() {
    debugger
    fetch(`${API_BASE_URL}/skills_update.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.skills)
    })
    .then(res => res.json())
    .then(data => {
      this.responseMessage = data.message;
       if (data.status === 'success') {
          // Redirect to home page on success
          this.router.navigate(['/']);
        }
    })
    .catch(() => {
      this.responseMessage = 'An error occurred while updating skills.';
    });
  }
}

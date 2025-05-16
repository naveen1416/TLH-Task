import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { API_BASE_URL } from '../constants';

@Component({
  selector: 'app-profileupdate',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './profileupdate.component.html'
})
export class ProfileupdateComponent {
  profile = {
    name: '',
    role: '',
    bio: '',
    email: ''
  };
  responseMessage = '';
  constructor(private router: Router) {}
  updateProfile() {
    fetch(`${API_BASE_URL}/profile_update.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.profile)
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
        this.responseMessage = 'An error occurred while updating the profile.';
      });
  }
}

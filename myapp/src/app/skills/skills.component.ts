
// src/app/skills/skills.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Router, RouterLink } from '@angular/router';
import { API_BASE_URL } from '../constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  frontendSkills: string[] = [];
  backendSkills: string[] = [];
  otherSkills: string[] = [];
  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit(): void {
    this.http.get<any>(`${API_BASE_URL}/skills.php`)
      .subscribe(data => {
        this.frontendSkills = data.frontend?.split(',').map((s: string) => s.trim()) || [];
        this.backendSkills = data.backend?.split(',').map((s: string) => s.trim()) || [];
        this.otherSkills = data.others?.split(',').map((s: string) => s.trim()) || [];
      });
  }
}

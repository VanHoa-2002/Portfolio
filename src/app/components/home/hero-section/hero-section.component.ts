import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { personalData } from '@/utils/data/personal-data';
import { skillsData } from '@/utils/data/skills';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
})
export class HeroSectionComponent implements OnInit {
  personalData = personalData;
  skillsData = skillsData;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebookSquare;
  faTwitter = faTwitterSquare;
  faDownload = faDownload;
  ngOnInit(): void {
    console.log(this.skillsData);
  }
}

import { Component, OnInit } from '@angular/core';
import { AboutMeService } from './about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  aboutMeDescription = '';
  specializationObj: any;
  constructor(private aboutMeService: AboutMeService) {}

  ngOnInit() {
    this.aboutMeService.getAboutMeData().subscribe(response => {
      this.getAboutMeDescription();
      this.getSpecializationObj();
    });
  }
  getAboutMeDescription() {
    this.aboutMeDescription = this.aboutMeService.getAboutMeDescription();
  }
  getSpecializationObj() {
    this.specializationObj = this.aboutMeService.getSpecializationArryObj();
  }
}

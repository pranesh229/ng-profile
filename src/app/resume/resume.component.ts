import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resume = '';
  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.resumeService.getResume().subscribe(resumeData => {
      this.resume = resumeData.fields.resume;
    });
  }
}

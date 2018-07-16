import { Component, OnInit } from '@angular/core';
import { ShortProfileService } from './short-profile.service';

@Component({
  selector: 'app-short-profile',
  templateUrl: './short-profile.component.html',
  styleUrls: ['./short-profile.component.scss']
})
export class ShortProfileComponent implements OnInit {
  constructor() {}
  resumePath = 'https://pranesh229.github.io/Pranesh_resume.pdf';
  ngOnInit() {}
}

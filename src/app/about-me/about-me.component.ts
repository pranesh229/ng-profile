import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  aboutMeContentURL =
    'https://cdn.contentful.com/spaces/hgjyi5lurih3/entries?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412';
  constructor() {}

  ngOnInit() {}
  getAboutMeDescription() {}
  getSpecializationObj() {}
}

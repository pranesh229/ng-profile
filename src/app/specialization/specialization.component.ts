import { Component, OnInit, Input } from '@angular/core';
import { AboutMeService } from './../about-me/about-me.service';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss']
})
export class SpecializationComponent implements OnInit {
  @Input() specializationObj: any;
  constructor() {}

  ngOnInit() {}
}

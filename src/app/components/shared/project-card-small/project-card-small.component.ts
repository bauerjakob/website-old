import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Project } from '@models/project';

@Component({
  selector: 'shared-project-card-small',
  templateUrl: './project-card-small.component.html',
  styleUrls: ['./project-card-small.component.scss']
})
export class ProjectCardSmallComponent implements OnInit {
  
  @Input('project') project: Project;

  constructor() { }

  ngOnInit(): void {
  }

}

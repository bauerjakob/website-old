import { Component, OnInit } from '@angular/core';
import { MyProjectsService } from '@services/my-projects.service';
import { Project } from '@models/project';

@Component({
    selector: 'home-my-projects',
    templateUrl: './my-projects.component.html',
    styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

    projects: Project[];

    constructor(private projectsService: MyProjectsService) {
        projectsService.getProjects().subscribe(p => this.projects = p);
    }

    ngOnInit() {
    }
}

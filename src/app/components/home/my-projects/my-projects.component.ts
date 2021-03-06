import { Component, OnInit } from '@angular/core';
import { MyProjectsService } from '@services/my-projects.service';
import { Project } from '@models/project';
import { GitlabService } from '@services/gitlab.service'

@Component({
    selector: 'home-my-projects',
    templateUrl: './my-projects.component.html',
    styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

    projects: Project[];
    gitlabProjects: Project[]

    constructor(private _projectsService: MyProjectsService) {
        _projectsService.getProjects().subscribe(p => this.projects = p);
        _projectsService.getGitlabProjects().subscribe(p => this.gitlabProjects = p)
    }

    ngOnInit() {
    }
}

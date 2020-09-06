import { Component, OnInit, Input } from '@angular/core';
import { Project } from '@models/project';
import { AotSummaryResolver } from '@angular/compiler';


@Component({
    selector: 'shared-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

    @Input('project') project: Project;

    constructor() { }

    ngOnInit() {
    }
}

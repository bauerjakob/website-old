import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PROJECTS } from '@data/projects';
import { Project } from '@models/project';

@Injectable({
    providedIn: 'root'
})
export class MyProjectsService {

    constructor() { }

    public getProjects(): Observable<Project[]> {
        return of(PROJECTS);
    }

}

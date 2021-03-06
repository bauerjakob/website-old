import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

import { PROJECTS } from '@data/projects';
import { Project } from '@models/project';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class MyProjectsService {

    private gitlabBaseUrl: string = 'https://gitlab.com/api/v4';
    
    constructor(private _httpClient: HttpClient) {}

    public getProjects(): Observable<Project[]> {
        return of(PROJECTS);
    }


    public getGitlabProjects(): Observable<Project[]> {
        return this._httpClient.get<object[]>(`${this.gitlabBaseUrl}/users/5157393/projects`).pipe(
            map(res => {
                var ret = Array<Project>();
                for (const p of res){
                    const project = new Project();
                    project.name = p['name']
                    project.description = p['description']
                    project.buttonText = 'View'
                    project.buttonLink = p['web_url']
                    project.logoUrl = p['avatar_url']
                    project.titleUrl = p['avatar_url']
                    ret.push(project);
                } 
                return ret;
            })
        );
    }
}

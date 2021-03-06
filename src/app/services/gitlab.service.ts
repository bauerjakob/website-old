import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GitlabService {
    private gitlabBaseUrl: string = 'https://gitlab.com/api/v4';

    constructor(private _httpClient: HttpClient) {}

    public getProjects(): Observable<object> {
        return this._httpClient.get(`${this.gitlabBaseUrl}/users/5157393/projects`);
    }
}

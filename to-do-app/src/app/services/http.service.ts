import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/task_app/collections/tasks';
  readonly param = new HttpParams().set('apiKey', 'mj2UHLJvwDWCOtnHFW2qZb9lCPQd8xri');



  constructor(private http: HttpClient) {
    this.getTasks();
   }

  getTasks() {
    this.http.get(this.URL_DB, {params: this.param})
    .subscribe(tasks => {
     console.log(tasks);
    });
  }
}

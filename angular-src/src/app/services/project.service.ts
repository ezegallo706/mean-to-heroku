import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/project';
import {Global} from './global';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public url:string;

  constructor(private _http:HttpClient) { 
    this.url = Global.url;
  }

  testService(){
    return 'probando el servicio de Angular'
  }

  saveProject(project:Project): Observable<any> {
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.post('api/save-project', params ,{headers:headers})
  }

  // getProjects(): Observable<any>{
  //   let headers = new HttpHeaders().set('Content-type', 'application/json');

  //   return this._http.get(this.url+'projects' , {headers:headers})
  // }

  getProjects(): Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get('/api/projects' , {headers:headers})
  }

//   getProjects():  Observable<any> {
//     return this._http.get('http://localhost:3700/api/projects')
//     .map((response:Response) => {
//       response.json();
//       console.log(response);
//       });
// }

  getProject(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get( 'api/project' + id , {headers:headers})
    
  }

  deleteProject(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.delete('api/project' + id , {headers:headers})
  }

  updateProject(project): Observable<any> {
    let parametros = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.put('api/projects'+ project._id , parametros , {headers:headers})
  }
}

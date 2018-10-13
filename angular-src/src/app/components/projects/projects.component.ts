import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public url: String;

  proj:Object;
  
  constructor(
    private _projectService:ProjectService
    
  ) { this.url= Global.url }
    

  ngOnInit() {
    // this.getProjects();

    this._projectService.getProjects().subscribe(res => {
      this.proj = res.proj;
    },
     err => {
       console.log(err);
       return false;
     });
  }
    
  

  // getProjects(){
  //   this._projectService.getProjects().subscribe(
  //     response => {
  //       if(response.projects){
  //         this.projects = response.projects;
  //       }
  //     },
  //     error => {
  //       console.log(<any>error)
  //     }
  //   );
  // }


}

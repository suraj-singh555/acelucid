import { Component } from '@angular/core';
import { Ragistration } from '../ragistration';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  allRagistration:Ragistration[]=[];
  displayedColumns: string[] = ['id', 'name', 'username', 'email','address','phone','website','company'];
  constructor(private myserviceService:MyserviceService){}
  ngOnInit():void{
    this.getAllRagistration();
  }
  getAllRagistration(){
    this.myserviceService.getAll().subscribe((data)=>{
      this.allRagistration=data;
      console.log(this.allRagistration)
    })
  }
}

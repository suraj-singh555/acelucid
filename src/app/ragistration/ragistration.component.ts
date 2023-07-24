import { Component } from '@angular/core';
import { Ragistration } from '../ragistration';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ragistration',
  templateUrl: './ragistration.component.html',
  styleUrls: ['./ragistration.component.css']
})
export class RagistrationComponent {
ragistrationData:Ragistration={
  id:0,
  name:'',
  username:'',
  email:'',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: ''
},
  phone:'',
  website:'',
  company: {
    name: '',
    catchPhrase: '',
    bs: ''
}
}
constructor(private ms:MyserviceService,
  private router:Router){}
ngOnInit():void{}
addData(){
  this.ms.creat(this.ragistrationData).subscribe((data)=>{
this.router.navigate(["/"])
  })
}
}

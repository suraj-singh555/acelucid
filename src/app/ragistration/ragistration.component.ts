import { Component } from '@angular/core';
import { Ragistration } from '../ragistration';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-ragistration',
  templateUrl: './ragistration.component.html',
  styleUrls: ['./ragistration.component.css']
})
export class RagistrationComponent {
  ragistrationData: any;
  constructor(private builder:FormBuilder, private ms:MyserviceService, private router:Router){}
  ngOnInit():void{
 this.ragistrationData=this.builder.group({
    id:['',Validators.required],
    name:['',Validators.required],
    username:['',Validators.required],
    email:['',Validators.required],
    address: this.builder.group({
      street:['',Validators.required],
      suite:['',Validators.required],
      city:['',Validators.required],
      zipcode:['',Validators.required],
    }),
    website:['',Validators.required],
    phone:['',Validators.required],
    company: this.builder.group({
      name:['',Validators.required],
      catchPhrase:['',Validators.required],
      bs:['',Validators.required]
      
    })
  });}

  addData(){
       this.ms.creat(this.ragistrationData.value).subscribe((data)=>{
     this.router.navigate(["/"])
      })}

// ragistrationData:Ragistration={
//   id:0,
//   name:'',
//   username:'',
//   email:'',
//   address: {
//     street: '',
//     suite: '',
//     city: '',
//     zipcode: ''
// },
//   phone:'',
//   website:'',
//   company: {
//     name: '',
//     catchPhrase: '',
//     bs: ''
// }
// }
// constructor(private ms:MyserviceService,
//   private router:Router){}
// ngOnInit():void{}
// addData(){
//   this.ms.creat(this.ragistrationData).subscribe((data)=>{
// this.router.navigate(["/"])
//   })
// }
}

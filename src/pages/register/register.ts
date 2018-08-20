import { Component } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: 'register.html'
})
export class Register {
    list:any=[];
constructor(){
this.list=[{
    name:"Adults",
    icon:"ios-people-outline",
    color:"calm",
    checked:true
},
{
    name:"Child",
    icon:"ios-tennisball-outline",
    color:"royal",
    checked:false

},
{
    name:"Animal",
    icon:"ios-paw-outline",
    color:"danger",
    checked:false

}]

}

}
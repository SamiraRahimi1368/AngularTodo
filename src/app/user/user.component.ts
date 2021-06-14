import { Component } from "@angular/core";


@Component({
   selector: 'app-user',
   templateUrl: './user.component.html' 
})

export class UserComponent{
   
    currentVal="";
    
getVal(val)
{
this.currentVal=val

}

}

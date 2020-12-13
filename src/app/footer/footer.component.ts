import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      this.allowNewServer=false;
    }, 2000);
   }
   name:string="somil";
  serverId:number=5451;
  status:string="online";
  allowNewServer=true;
  serverName='';
  msg='';
  userName='';
  
  serverCreationStatus='no server ceated';
  ngOnInit(): void {
  }
  getData(){
    return this.status
  }
  serverCreation(){
  this.serverCreationStatus='server created';
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value
  }
  
  myMsg(event:Event){
    this.msg=(<HTMLInputElement>event.target).value
  
  }

}


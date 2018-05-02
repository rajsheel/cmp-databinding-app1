import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements = [];
  

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push(
    {
    name : serverData.serverName,
    type : 'server',
    content: serverData.serverContent 
    }
    )
  }

  onBluePrintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push(
    {
    name : blueprintData.serverName,
    type : 'blueprint',
    content: blueprintData.serverContent 
    }
    )
  }


}

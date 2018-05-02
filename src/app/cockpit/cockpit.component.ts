import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output('servercreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpcreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //newServerName = '';
  //newServerContent = 'Prefilled';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(inputName: HTMLInputElement) {
      
    this.serverCreated.emit({serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(inputName: HTMLInputElement) {
       
    this.blueprintCreated.emit({serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }
}

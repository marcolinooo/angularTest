import { Component, OnInit } from '@angular/core';
import {OwnIpEntity} from "../../entity/ownIp.entity";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  nostroIp?: OwnIpEntity={
    ip:''
  };
  ghg: string='';
  constructor() { }

  ngOnInit(): void {

  }

  showIp() {

  }

  view() {

    alert('stai attento '+this.nostroIp?.ip)
    alert('hai scritto ' + this.ghg)
  }
}

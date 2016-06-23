import { Component, Input, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Server } from './server/server.component';
// @Injectable()
@Component({
  selector: 'server-detail',
  templateUrl: './app/home/servers-details/serversDetails.component.html'
})
export class ServerDetail {
  @Input()
  servers: Server[];

  ngOnInit() {
    this.servers = [
      {
        name: 'Local Polopoly',
        ip: '172.21.1.68',
        status: 'Off'
      },
      {
        name: 'Remote Polopoly',
        ip: '172.21.1.160',
        status: 'On'
      }
    ]
  }
}

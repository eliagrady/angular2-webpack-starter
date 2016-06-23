import { Component, Input, Injectable } from '@angular/core';
import { Http } from '@angular/http';

// @Injectable()
@Component({
  selector: 'server',
  templateUrl: './app/home/server-details/server/server.component.html'
})
export class Server {
  @Input()
  name: string;
  ip: string;
  status: string;

  constructor() {
  }
}

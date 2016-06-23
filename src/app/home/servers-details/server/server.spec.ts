// import { TestComponentBuilder } from '@angular/compiler/testing';
// import { Component, provide } from '@angular/core';
// import {
//   beforeEachProviders,
//   inject,
//   injectAsync,
//   it
// } from '@angular/core/testing';
// import { BaseRequestOptions, Http } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';
//
// import { Server } from './server.component';
//
// describe('Title', () => {
//   beforeEachProviders(() => [
//     BaseRequestOptions,
//     MockBackend,
//     {
//       provide: Http,
//       useFactory: function(backend, defaultOptions) {
//         return new Http(backend, defaultOptions);
//       },
//       deps: [MockBackend, BaseRequestOptions]
//     },
//
//     Server
//   ]);
//
//
//   it('should have http', inject([ Server ], (title) => {
//     expect(!!title.http).toEqual(true);
//   }));
//
//   it('should get data from the server', inject([ Server ], (title) => {
//     spyOn(console, 'log');
//     expect(console.log).not.toHaveBeenCalled();
//
//     title.getData();
//     expect(console.log).toHaveBeenCalled();
//     expect(title.getData()).toEqual({ value: 'AngularClass' });
//   }));
//
// });

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  myMethod() {
    return console.log('hey, what is up?')
  }
}

import { Injectable } from '@angular/core';
import { User } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const users = [
      { id: 11, username: 'rajeshh' , firstName: 'Rajesh', lastName: 'Hazari', password: 'admin111', token:'' }
    ];
    return {users};
  }

   // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

interface User {
  name: string,
  id: number,
  description: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {name: "Frederick", id: 1, description: "I am a programmer", img: "https://i.ytimg.com/vi/bUZhfXRaJ0w/maxresdefault.jpg"},
    {name: "Gabriel", id: 2, description: "I am a programmer", img: "https://i.ytimg.com/vi/bUZhfXRaJ0w/maxresdefault.jpg"},
    {name: "Shawn", id: 3, description: "I am a programmer", img: "https://i.ytimg.com/vi/bUZhfXRaJ0w/maxresdefault.jpg"},
    {name: "John", id: 4, description: "I am a programmer", img: "https://i.ytimg.com/vi/bUZhfXRaJ0w/maxresdefault.jpg"},
    {name: "Janice", id: 5, description: "I am a programmer", img: "https://i.ytimg.com/vi/bUZhfXRaJ0w/maxresdefault.jpg"},
    {name: "Vivienne", id: 6, description: "I am a programmer", img: "https://i.ytimg.com/vi/bUZhfXRaJ0w/maxresdefault.jpg"},
  ];

  usersUpdated = new Subject<User[]>();

  constructor(private router: Router) { }

  get _users(){
    return this.users.slice();
  }

  editUser(user) {
    let index = this.users.findIndex(x => x.id === user.id);
    this.users[index].name = user.name;
    this.users[index].description = user.description;
    this.usersUpdated.next(this.users);
    this.router.navigateByUrl('users');
  } 
}
